import { useNavigate, useParams } from "react-router";
import LabelInput1 from 'components/atoms/LabelInput1';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';
import EditorComponent from 'components/atoms/EditorComponent';
import toast from 'react-hot-toast';
import { useState, useEffect } from "react";
import altbaseService from "services/altbaseService";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [template_name, setTemplate_name] = useState<string>("");
    const [template_slug, setTemplate_slug] = useState<string>("");
    const [template_from, setTemplate_from] = useState<string>("");
    const [template_subject, setTemplate_subject] = useState<string>("");
    const [template_from_mail, setTemplate_from_mail] = useState<string>("");
    const [template_html, setTemplate_html] = useState<string>();
    const [template_variables, setTemplate_variables] = useState<string>();

    const goBack = () => {
        navigate(-1);
    }

    const saveHandler = async () => {
        let { status, content, message } = await altbaseService.updateEmailTemplate(parseInt(id || "0"), {
            template_name,
            template_slug,
            template_from,
            template_subject,
            template_from_mail,
            template_html,
            template_variables,
        })
        if (status === "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }

    useEffect(() => {
        (async () => {
            let { status, content, message } = await altbaseService.getEmailTemplateById(parseInt(id || "0"))
            if (status === "success") {
                setTemplate_name(content.template_name);
                setTemplate_slug(content.template_slug);
                setTemplate_subject(content.template_subject);
                setTemplate_from(content.template_from);
                setTemplate_from_mail(content.template_from_mail);
                setTemplate_html(content.template_html);
                setTemplate_variables(content.template_variables);
            } else {
                toast.error(message);
            }
            console.log(status)
        })()
    }, []);
    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid md:grid-cols-2 gap-4">
                <LabelInput1 text={template_name} onChangeHandler={setTemplate_name} className="mt-2 md:mt-6" label="Template Name *" placeholder="" disabled={true}></LabelInput1>
                <LabelInput1 text={template_slug} onChangeHandler={setTemplate_slug} className="mt-2 md:mt-6" label="Template Slug *" placeholder="" disabled={true}></LabelInput1>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <LabelInput1 text={template_from} onChangeHandler={setTemplate_from} className="mt-2 md:mt-6" label="Template From *" placeholder=""></LabelInput1>
                <LabelInput1 text={template_subject} onChangeHandler={setTemplate_subject} className="mt-2 md:mt-6" label="Template Subject *" placeholder=""></LabelInput1>
                <LabelInput1 text={template_from_mail} onChangeHandler={setTemplate_from_mail} className="mt-2 md:mt-6" label="Template From Email *" placeholder=""></LabelInput1>
            </div>
            <EditorComponent label="Template HTML *" propContent={template_html} contentChangeHandler={setTemplate_html}></EditorComponent>
            <div className="grid grid-cols-2 gap-4">
                <LabelInput1 text={template_variables} onChangeHandler={setTemplate_variables} className="" label="Template Variable" placeholder="" disabled={true}></LabelInput1>
            </div>
            <div className='w-full flex justify-center mt-8'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={saveHandler} />
                <Button2 className='w-32 ' text='Back' onClick={goBack} />
            </div>
        </div>
    )
}

export default Edit;

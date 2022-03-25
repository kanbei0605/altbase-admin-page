import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { ITable } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";

const Manage = () => {
    const navigate = useNavigate();
    const [tableData, setTableData] = useState<ITable>({
        fields: [{
            text: "Sr.no.",
            code: "sr_no"
        }, {
            text: "Title",
            code: "title"
        }, {
            text: "Slug",
            code: "slug"
        }, {
            text: "Status",
            code: "status"
        }, {
            text: "Action",
            code: "action"
        }, ],
        datas: [{
            sr_no: 1,
            title: "Privacy Policy",
            slug: "privacy_policy",
            status: {
                changeHandler: async (val: boolean) => {
                    return val
                },
            },
            action: {
                edit: true,
                editHandler: (id: number) => {
                    navigate(`${ prefix }/email-template/edit/${ id }`);
                },
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/email-template/edit/${ id }`);
                }
            }
        }]
    });
    return (
        <DataTable tableData={tableData} />
    )
}

export default Manage;
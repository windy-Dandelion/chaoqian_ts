import React, {useEffect} from "react";
import {Form} from "antd";
import {AreaDto} from "@/pages/project/type";

interface Props  {
   onSave?: () => void;
   onCancel?: () => void;
   model: 'add' | 'edit';
   open:boolean;
   data:AreaDto;
}

const AreaStatisticsSavePage:React.FC<Props> = (props)=>{
  const [form] = Form.useForm();
  useEffect(() => {
    if (props.open) {
      // 初始化
      form.setFieldsValue(props.data);
    }
  }, [open]);
   return <div>

   </div>
}

export default AreaStatisticsSavePage;

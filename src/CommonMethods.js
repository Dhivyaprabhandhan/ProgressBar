


export const getFieldValueForm = (formData, itemMeta) =>
{

    // let response = {isSuccess:false, data:null}
    // console.log("eeee", itemMeta, formData)

    let item = formData.find((item)=> {return item.uK === itemMeta.uK})

    return item?.inputVal 

    // console.log("itemfff", item)

}
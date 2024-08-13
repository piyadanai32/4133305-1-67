export function GET(requset,{params}){
    return Response.json ({
        name: "piyadanai",
        major : "IT",
        lv :"2",
        id: params.id
    });
}
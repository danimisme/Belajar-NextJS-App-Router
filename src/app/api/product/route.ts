import { NextRequest, NextResponse } from "next/server";

const data = 
[
    {
        id: 1,
        title: "Sepatu Baru",
        price: 100000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-shoes-NMmm1B.png"
    },
    {
        id: 2,
        title: "Sepatu Baru Dong",
        price: 500000,
        image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0b669fd5-61a7-43db-965b-f60d2dc3ffe5/air-force-1-07-shoes-5fFrTT.png",
    },
]

export async function GET(request : NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        const detailProduct = data.find((item) => item.id === Number(id))
        if (detailProduct) {
            return NextResponse.json({
                status : 200, 
                message: "Succes", 
                data : detailProduct})
        } else {
            return NextResponse.json({
                status: 404,
                message : "Not Found",
                data: {}
            })
        }
    } 

    return NextResponse.json({status:200, message:"Success",data})
}
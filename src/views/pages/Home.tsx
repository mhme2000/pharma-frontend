import { useEffect, useState } from "react";
import { api } from "../../api";
import BasicCard from "../components/BasicCard";

export default function Home() {
    const [items, setItems] = useState<any>();
    const getData = async () => {
        const result = await api.get('stockItems');
        setItems(result.data);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <h2>Home</h2>
            {items && items.map((item: any) => {
                return (
                    <BasicCard key={item.stockItemId} description={item.product.description} note={item.product.note} unitaryValue={item.unitaryValue} />
                );
            })}

            {console.log(items)}
        </>
    );
}
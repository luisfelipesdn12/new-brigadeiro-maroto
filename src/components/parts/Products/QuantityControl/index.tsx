import { useContext, useEffect, useState } from "react";
import ProductType from "../../../../models/ProductType";
import Order from "../../../../models/Order";
import OrderContext from "../../../../store/OrderContext";
import {
    QuantityControlWrapper,
    ClickableControl,
    QuantityDisplay,
} from "./styles";
import KitQuantityControl from "./KitQuantityControl";

interface QuantityControlProps {
    productID: string;
    productType: ProductType;
}

const QuantityControl: React.FC<QuantityControlProps> = ({
    productID,
    productType,
}) => {
    const [order, setOrder] = useContext(OrderContext);
    const [availability, setAvailability] = useState<number>(0);

    useEffect(() => {
        const fetchAvailability = setInterval(() => {
            const fetched = order.availability.getAvailabilityByID(productID);
            if (fetched) setAvailability(fetched);
        }, 200);

        if (availability) clearInterval(fetchAvailability);
    });

    const productTypeOrder = (() => {
        switch (productType.id) {
            case "CAKE02":
                return "cakeOrder";
            case "BROW03":
                return "brownieOrder";
        }
    })();

    const quantity = productTypeOrder
                    ? order[productTypeOrder].getQuantityOrdered(productID)
                    : order.kitOrder.getQuantityOrdered(productID);

    const handleSub = (): void => {
        let newQuantity = quantity - 1;
        if (newQuantity < 0) newQuantity = 0;

        order[productTypeOrder].updateProductQuantity(productID, newQuantity);
        const newOrder = new Order();
        Object.assign(newOrder, order);

        setOrder(newOrder);
    };

    const handleAdd = (): void => {
        let newQuantity = quantity + 1;
        if (!productType.only_pre_ordering && newQuantity > availability) {
            newQuantity = availability;
        }

        order[productTypeOrder].updateProductQuantity(productID, newQuantity);
        const newOrder = new Order();
        Object.assign(newOrder, order);

        setOrder(newOrder);
    };

    if (productType.id === "KITS01") {
        return <KitQuantityControl productID={productID} />;
    } else {
        return (
            <>
                <QuantityControlWrapper>
                    <ClickableControl onClick={handleSub}>-</ClickableControl>
                    <QuantityDisplay>{quantity}</QuantityDisplay>
                    <ClickableControl onClick={handleAdd}>+</ClickableControl>
                </QuantityControlWrapper>
            </>
        );
    }
};

export default QuantityControl;

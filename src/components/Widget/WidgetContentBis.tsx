import { useWidgetContext } from "./WidgetContext"

export const WidgetContentBis = () => {
    const { widgetItems, currentItemId } = useWidgetContext()
    
    return (
        <>
            <div>{widgetItems[currentItemId].data.text}</div>
            <div>{widgetItems[currentItemId].data.text}</div>
        </>
    )
}
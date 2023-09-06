import { useWidgetContext } from "./WidgetContext"

export const WidgetContent = () => {
    const { widgetItems, currentItemId } = useWidgetContext()
    
    return (
        <div>{widgetItems[currentItemId].data.text}</div>
    )
}
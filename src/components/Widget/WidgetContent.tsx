import { useWidgetContext } from "./WidgetContext"

export const WidgetContent = () => {
    const { currentItem } = useWidgetContext()
    
    return (
        <div>{currentItem.data.text}</div>
    )
}
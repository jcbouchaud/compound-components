import { useWidgetContext } from "./WidgetContext"

export const WidgetContentBis = () => {
    const { currentItem } = useWidgetContext()
    
    return (
        <>
            <div>{currentItem.data.text}</div>
            <div>{currentItem.data.text}</div>
        </>
    )
}
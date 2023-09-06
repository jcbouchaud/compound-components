import { useWidgetContext } from "./WidgetContext"

export const WidgetTopNav = () => {
    const { widgetItems, onItemSelect } = useWidgetContext()
    
    return (
        <div className="flex flex-row gap-4">
            {widgetItems.map((x, index) => {
                return <div key={index} onClick={() => onItemSelect(index)} className="cursor-pointer">{x.name}</div>
            })}
        </div>
    )
}
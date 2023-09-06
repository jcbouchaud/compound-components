import { useWidgetContext } from "./WidgetContext"

export const WidgetSideNav = () => {
    const { items, onItemSelect } = useWidgetContext()
    
    return (
        <div className="flex flex-col gap-4">
            {items.map((x, index) => {
                return <div key={index} onClick={() => onItemSelect(index)} className="cursor-pointer">{x.name}</div>
            })}
        </div>
    )
}
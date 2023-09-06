import { WidgetSideNav } from "./WidgetSideNav"
import { WidgetTopNav } from "./WidgetTopNav"
import { useWidgetContext } from "./WidgetContext"

interface WidgetLayoutInterface {
    children: React.ReactNode
}

export const WidgetLayout = ({ children }: WidgetLayoutInterface) => {
    const { layout, items } = useWidgetContext()

    if (items.length <= 1) {
        return <>{children}</>
    }

    if (layout === "left") {
        return (
            <div className="flex flex-row">
                <WidgetSideNav />
                <div className="pl-2">{children}</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <WidgetTopNav />
            <div className="pt-2">{children}</div>
        </div>
    )
}
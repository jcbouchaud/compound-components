import { WidgetItem, WidgetProvider } from "./WidgetContext"

import { WidgetContent } from "./WidgetContent"
import { WidgetContentBis } from "./WidgetContentBis"
import { WidgetLayout } from "./WidgetLayout"

interface WidgetCardInterface {
    items: Array<WidgetItem>
    layout?: "top" | "left"
    content?: React.ReactNode
}

const WidgetCard = ({ items, layout, content }: WidgetCardInterface) => {
    return (
        <WidgetProvider value={{ widgetItems: items, layout }}>
            <div className="bg-white p-4 rounded-lg w-96">
                <WidgetLayout>{content}</WidgetLayout>
            </div>
        </WidgetProvider>
    )
}

WidgetCard.Content = WidgetContent
WidgetCard.ContentBis = WidgetContentBis

export { WidgetCard }
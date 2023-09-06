import { createContext, useContext, useState } from "react";

export interface WidgetItem {
    name: string;
    data: {
        text: string
    }
}

interface WidgetContextInitInterface {
    widgetItems: Array<WidgetItem>,
    layout?: "top" | "left"
}

interface WidgetContextInterface extends WidgetContextInitInterface {
    currentItemId: number,
    onItemSelect: (index: number) => void
}

export const WidgetCardContext = createContext<WidgetContextInterface | null>(null)

export const WidgetProvider = ({ value, children }: { value: WidgetContextInitInterface, children: JSX.Element }) => {
    const [currentItemId, setCurrentItemId] = useState<number>(0)

    const onItemSelect = (index: number) => {
        setCurrentItemId(index)
    }

    const contextValue = {
        ...value,
        currentItemId,
        onItemSelect
    }

    return (
      <WidgetCardContext.Provider value={contextValue}>{children}</WidgetCardContext.Provider>
    )
  }
  

export const useWidgetContext = () => {
    const context = useContext(WidgetCardContext)

    if (!context) {
        throw new Error("WidgetCard.* component must be rendered as child of WidgetCard component")
    }

    return context
}
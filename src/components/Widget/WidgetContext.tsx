import { createContext, useContext, useState } from "react";

export interface WidgetItem {
    name: string;
    data: {
        text: string
    }
}

interface WidgetContextInitInterface {
    items: Array<WidgetItem>,
    layout?: "top" | "left"
}

interface WidgetContextInterface extends WidgetContextInitInterface {
    currentItem: WidgetItem
    onItemSelect: (index: number) => void
}

export const WidgetCardContext = createContext<WidgetContextInterface | null>(null)

export const WidgetProvider = ({ value, children }: { value: WidgetContextInitInterface, children: JSX.Element }) => {
    const [currentItem, setCurrentItem] = useState<WidgetItem>(value.items[0])

    const onItemSelect = (index: number) => {
        setCurrentItem(value.items[index])
    }

    const contextValue = {
        ...value,
        onItemSelect,
        currentItem
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
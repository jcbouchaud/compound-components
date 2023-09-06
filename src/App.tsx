import { WidgetCard } from './components/Widget'

function App() {
  
  const widgetItems = [
    {
        name: "Button 1",
        data: {
            text: "Content 1"
        }
    },
    {
        name: "Button 2",
        data: {
            text: "Content 2"
        }
    }
  ]

  return (
    <div className='flex flex-row gap-4'>
      <WidgetCard items={widgetItems} 
        layout="top"
        content={<WidgetCard.Content />}
      />
      <WidgetCard items={widgetItems} 
        layout="left"
        content={<WidgetCard.Content />}
      />
      <WidgetCard items={widgetItems} 
        layout="left"
        content={<WidgetCard.ContentBis />}
      />
      <WidgetCard items={[]} 
        content={<div>Random shit</div>}
      />
    </div>
  )
}

export default App

import arrayMove from 'array-move';
import React from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';


const SortableItem = SortableElement(({value}:any) => (
    <li tabIndex={0}>{value}</li>
  ));

const SortableList = SortableContainer(({items}:any) => {
    return (
      <ul>
        {items.map((value: any, index: any) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </ul>
    );
  });

const Dashboard = () => {
    const [state,setState] = React.useState({items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']})
    // const state = {
    //     items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    //   };
      const onSortEnd = ({oldIndex, newIndex}:any) => {
        setState({items: arrayMove(state.items, oldIndex, newIndex)});
      };

    return (
        <>
    <h1>Dashboard</h1>
    <SortableList items={state.items} onSortEnd={onSortEnd}  />
    </>
    )
}

export default Dashboard;
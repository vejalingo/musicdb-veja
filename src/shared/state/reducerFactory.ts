const initialListState = {
  listItems: [],
  fetching: true,
};

const initialItemState = {
  item: {},
  itemLoaded: false,
};

export const list = ({ path }: { path: string }) => (
  state = initialListState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case `${path}/list/FETCHED_ITEMS`:
      return {
        ...state,
        listItems: action.payload,
        fetching: false,
      };
    case `${path}/list/FETCHING`:
      return { ...state, listItems: [], fetching: true };
    case `${path}/list/FETCH_ERROR`:
      return { ...state, fetching: false };
    default:
      return state;
  }
};

export const item = ({ path }: { path: string }) => (
  state = initialItemState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case `${path}/item/FETCHED_ITEM`:
      return { ...state, item: action.payload, itemLoaded: true };
    default:
      return state;
  }
};

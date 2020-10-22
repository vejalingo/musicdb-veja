const initialListState = {};
const initialItemState = {};

export const list = ({ path }: { path: string }) => (
  state = initialListState,
  action: { type: string; payload: any }
) => {};

export const item = ({ path }: { path: string }) => (
  state = initialItemState,
  action: { type: string; payload: any }
) => {};

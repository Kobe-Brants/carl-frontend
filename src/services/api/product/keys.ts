export const productKeys = {
  all: ['products'],
  byPage: (pageNumber: number, pageSize: number) => [
    ...productKeys.all,
    'paged',
    pageNumber,
    pageSize,
  ],
  byId: (id: string | null) => [...productKeys.all, id],
};

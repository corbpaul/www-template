const main = {
  id: 'ROOT',
  // screenProperties: 'TITLE',
  layout: {
    compact: {
      type: 'SingleColumnLayout',
      main: {
        type: 'MultipleSectionsPlacement',
        sectionDetails: [
          {
            sectionId: 'title_section',
          },
        ],
      },
    },
  },
};

const screens = [main];

export const resolvers = {
  Query: { screens: () => screens },
  ILayout: {
    __resolveType({ type }) {
      return type ? type : null;
    },
  },
};

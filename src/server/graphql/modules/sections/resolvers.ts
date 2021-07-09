const title = {
  id: 'title_section',
  sectionComponentType: 'TITLE',
  section: {
    type: 'TitleSection',
    title: 'What We Do in the Shadows',
  },
};

const sections = [title];

export const resolvers = {
  Query: { sections: () => sections },
  Section: {
    __resolveType({ type }) {
      return type ? type : null;
    },
  },
};

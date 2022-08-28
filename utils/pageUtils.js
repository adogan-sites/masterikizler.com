import config from "../configs/settings.json";

const seekAndCollectSlugs = (pageList, language, parentPath = []) => {
  let list = [];
  pageList
    .filter((p) => p.slugs)
    .forEach(({ slugs, subPages }) => {
      const path = [...parentPath, slugs[language]];
      list.push(path);
      if (subPages) {
        list.push([...path, "index"]);
        list = [...list, ...seekAndCollectSlugs(subPages, language, path)];
      }
    });
  return list;
};

const seekAndCollectUnslugs = (pageList, parentPath = []) => {
    let list = [];
    pageList
      .filter((p) => !p.slugs)
      .forEach(({ name, subPages }) => {
        const path = [...parentPath, name];
        list.push(path);
        if (subPages) {
          list.push([...path, "index"]);
          list = [...list, ...seekAndCollectUnslugs(subPages, path)];
        }
      });
    return list;
  };

export const getAllSlugPaths = () => {
  const { languages } = config;
  return languages
    .map((language) => seekAndCollectSlugs(config.pages, language))
    .flatMap((a) => a);
};

export const getAllUnslugPaths = () => seekAndCollectUnslugs(config.pages);

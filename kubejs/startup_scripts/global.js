global.MOD_LIST = Platform.getList();

global.hasMod = function (modId) {
  return global.MOD_LIST.contains(modId);
};

global.hasAllMods = function (modIds) {
  return modIds.every((modId) => global.hasMod(modId));
};

global.hasAnyMod = function (modIds) {
  return modIds.some((modId) => global.hasMod(modId));
};

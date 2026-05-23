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

const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');

global.registryIdExists = function (registry, id) {
  return registry.containsKey(ResourceLocation.parse(id));
};

global.itemExists = function (id) {
  return global.registryIdExists(BuiltInRegistries.ITEM, id);
};

global.blockExists = function (id) {
  return global.registryIdExists(BuiltInRegistries.BLOCK, id);
};

global.fluidExists = function (id) {
  return global.registryIdExists(BuiltInRegistries.FLUID, id);
};

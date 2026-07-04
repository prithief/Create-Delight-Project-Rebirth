if (global.hasAllMods(['ae2omnicells', 'create_new_age', 'createutilities'])) {
  ServerEvents.recipes((event) => {
    remove_recipes_id(event, [
      'ae2omnicells:ender_ingot_from_blocks',
      'ae2omnicells:ender_ingot_block_from_ingots',
    ]);
    event.recipes.create_new_age
      .energising('createutilities:void_steel_ingot', 'ae2omnicells:charged_ender_ingot', 3200)
      .id('createdelightcore:ae2/omnicells/energising/charged_ender_ingot');
  });
}

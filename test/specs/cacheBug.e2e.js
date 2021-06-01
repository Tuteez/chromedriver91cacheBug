it('todo', async () => {
    await browser.url('https://todomvc.com/examples/react/#/')

    //add and remove task 1
    await (await $(".new-todo")).setValue('1' + "\uE007");
    await (await $(".view")).moveTo();
    await (await $(".destroy")).click();

    //add and remove task 2
    await (await $(".new-todo")).setValue('2' + "\uE007");
    await (await $(".view")).moveTo();
    await (await $(".destroy")).click();

    //add and remove task 3
    await (await $(".new-todo")).setValue('3' + "\uE007");
    await (await $(".view")).moveTo();
    await (await $(".destroy")).click();

    const elements = await browser.executeScript(
        'return Object.values(window.document["$cdc_asdjflasutopfhvcZLmcfl_"].cache_).map((el) => el.tagName)',
        []
    );
    await expect(elements).toHaveLength(2);
});
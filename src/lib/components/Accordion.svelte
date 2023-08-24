<script>
    import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";

    import {
        IconSkull,
        IconClockFilled,
        IconCalendarCheck,
        IconGift,
    } from "@tabler/icons-svelte";

    var summary = "What is Día de los Muertos?";
    var content =
        "While Halloween and Day of the Dead occur nearly in tandem and share similar customs (candy, face painting, and community gathering), the two are not related. Halloween has ancient Celtic roots, while Day of the Dead has its own origins that date back to the Indigenous people of Mexico and Central America.";

    var summary2 = "When did it begin?";
    var content2 =
        "Roughly 3000 years ago, amongst the Aztec, Toltec, and Mayans, death and the dead were seen as a natural part of life that should be honored and celebrated, rather than mourned. In particular, the Nahua people of central Mexico believed the deceased traveled on a years-long journey to Chicunamictlán, the Land of the Dead. The living would provide supplies, such as food and water to aid them on the trek. This practice inspired the modern tradition of creating altars —known as ofrendas— at their homes, in addition to leaving offerings at the gravesites of loved ones.";

    var summary3 = "When is it celebrated?";
    var content3 =
        "Once the Spanish colonized Mexico in the 16th century, their own Catholic views on the dead influenced Mexican customs. Día de los Muertos was originally celebrated in the summer months. The holiday came to fall on November 1 and November 2 to align with All Saints Day and All Souls Day.";
</script>

<Accordion class="w-9/12 p-10 pt-6">
    <AccordionItem>
        <svelte:fragment slot="lead">
            <IconSkull />
        </svelte:fragment>
        <svelte:fragment slot="summary">
            {summary}
        </svelte:fragment>
        <svelte:fragment slot="content">
            {content}
        </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
        <svelte:fragment slot="lead">
            <IconClockFilled />
        </svelte:fragment>
        <svelte:fragment slot="summary">
            {summary2}
        </svelte:fragment>
        <svelte:fragment slot="content">
            {content2}
        </svelte:fragment>
    </AccordionItem>
    <AccordionItem>
        <svelte:fragment slot="lead">
            <IconGift />
        </svelte:fragment>
        <svelte:fragment slot="summary">{summary3}</svelte:fragment>
        <svelte:fragment slot="content">{content3}</svelte:fragment>
    </AccordionItem>
    <!-- ... -->
</Accordion>

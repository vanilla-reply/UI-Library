import UiHero from "./UiHero.vue";

export default {
  title: "Component/Hero",
  component: UiHero,
}

const Template = (args) => ({
    components: { UiHero },
    setup() {
      return { args };
    },
    template: '<ui-hero v-bind="args" />',
  });

  export const Hero = Template.bind({});
  Hero.args = {
    headline: "Headline",
    headlineElement: "h3",
    subheadline: "Introduction",
    subheadlineElement: "h4",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    ctas: [
      {
        variant: 'primary',
        size: 'lg',
        href: '#',
        title: 'title',
        text: 'CTA 1'
      },
      {
        variant: 'secondary',
        size: 'lg',
        href: '#',
        title: 'title2',
        text: 'CTA 2'
      }
    ]
  }

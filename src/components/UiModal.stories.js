import UiModal from "./UiModal.vue";

export default {
  title: "Core/Modal",
  component: UiModal,
}

const Template = (args) => ({
    components: { UiModal },
    setup() {
      return { args };
    },
    template: `
    <ui-modal headline="Metallica: Fuel">
      Gimme fuel, gimme fire Gimme that which I desire, ooh! Yeah! Turn on, I see red Adrenaline crash and crack my head Nitro junkie, paint me dead And I see red 100 plus through black and white War horse, warhead Fuck 'em man, white-knuckle tight Through black and white Ooh, on I burn Fuel is pumping engines Burning hard, loose, and clean And I burn, churning my direction Quench my thirst with gasoline So give me fuel, give me fire Give me that which I desire Hey! Turn on beyond the bone Swallow future, spit out home Burn your face upon the chrome Oh yeah Take the corner, join the crash Headlights, headlines Another junkie lives too fast Yeah, lives way too fast, fast, fast, oh, oh Ooh, on I burn Fuel is pumping engines Burning hard, loose, and clean And I burn, churning my direction Quench my thirst with gasoline So give me fuel, give me fire Give me that which I desire, ooh, yeah-heh White knuckle tight Give me fuel (on I burn, on and on) Give me fire (on I burn, on and on) My desire (on I burn, on and on) Ooh, on I burn Fuel is pumping engines Burning hard, loose, and clean And I burn, churning my direction Quench my thirst with gasoline Gimme fuel, gimme fire Gimme that which I desire, ooh On I burn
    </ui-modal>`,
  });

  export const Modal = Template.bind({});
  Modal.args = {
    isOpen: true,
    fullWidth:false,
    headline:'Metallica: Fuel'
  }

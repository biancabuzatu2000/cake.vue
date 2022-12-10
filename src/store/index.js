import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router";

Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    cakes: [],
    cake1:[],
    cupcake1:[],
    cookie1:[],
    cakesCopy:[],
    cupcakes:[],
    cupcakesCopy:[],
    cookies:[],
    cookiesCopy:[],
    user:{},
    cart:[],
  },
  getters: {
    total: state => state.cart,

  },
  mutations: {
    SET_CAKES(state, data) {
      state.cakes = data
      state.cakesCopy = [...data]
    },
    SET_CAKE1(state, data_cake1) {
      state.cake1 = data_cake1
    },
    SET_CUPCAKES(state, data_cup) {
      state.cupcakes = data_cup
      state.cupcakesCopy = [...data_cup]
    },
    SET_CUPCAKE1(state, data_cupcake1) {
      state.cupcake1 = data_cupcake1
    },
    SET_COOKIES(state, data_coo) {
      state.cookies = data_coo
      state.cookiesCopy = [...data_coo]
    },
    SET_COOKIE1(state, data_cookie1) {
      state.cookie1 = data_cookie1
    },
    SET_CART(state, data_cart) {
      state.cart = data_cart
    },
    SEARCH_CAKES(state, searchString) {
      state.cakes = state.cakes.filter(obj => obj.name.includes(searchString))
      if (!searchString) {
        state.cakes = [...state.cakesCopy]
      }
    },
    SEARCH_CUPCAKES(state, searchString) {
      state.cupcakes = state.cupcakes.filter(obj => obj.name.includes(searchString))
      if (!searchString) {
        state.cupcakes = [...state.cupcakesCopy]
      }
    },
    SEARCH_COOKIES(state, searchString) {
      state.cookies = state.cookies.filter(obj => obj.name.includes(searchString))
      if (!searchString) {
        state.cookis = [...state.cookiesCopy]
      }
    },
    SET_USER(state, user) {
      state.user = user
    },
    ADD_ITEM_TO_CART(state, cake) {
      state.cart.push(cake)
    },
    ADD_ITEM_TO_CART_CUP(state, cupcake) {
      state.cart.push(cupcake)
    },
    ADD_ITEM_CART_COO(state, cookie) {
      state.cart.push(cookie)
    },
    REMOVE_ITEM_FROM_CART(state, cake) {
      state.cart.splice(state.cart.indexOf((cake), 50))
    },
    REMOVE_ITEM_FROM_CART_CUP(state, cupcake) {
      state.cart.splice(state.cart.indexOf((cupcake), 50))
    },
    REMOVE_ITEM_FROM_CART_COO(state, cookie) {
      state.cart.splice(state.cart.indexOf((cookie), 50))
    },

},
  actions: {
    async get_data({commit}){
      try{
        setTimeout(()=>{
          const data = [
            {id:1, name: "1.S'MORE CAKE",quantity:1, cost: "78.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/S_moreCake_400x.jpg?v=1659447196"},
            {id:2, name: "2.WATERCOLOUR PALETTE CAKE ",quantity:1, cost: "81.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/PaletteWatercolourCake-WithWriting_400x.jpg?v=1650398176"},
            {id:3, name: "3.SPRING FLORAL CAKE",quantity:1, cost: "58.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/SpringFloralCake-2022_400x.jpg?v=1650394301"},
            {id:4, name: "4.TWIX CAKE ",quantity:1,cost: "46.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/TwixCake-2022_400x.jpg?v=1655481934",},
            {id:5, name: "5.GERMAN CHOCOLATE CAKE",quantity:1,cost: "76.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/GermanChocolateCake_400x.jpg?v=1593111035"},
            {id:6, name: "6.WHITE FLORAL CAKE",quantity:1, cost: "49.80", image: "https://cdn.shopify.com/s/files/1/0023/6797/9619/products/20220427_130453_800x800.jpg?v=1651175883 "},
            {id:7, name: "7.DRIP CAKE",quantity:1, cost: "49.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/CraveDripCake_400x.jpg?v=1593128077"},
            {id:8, name: "8.VEGAN CAKE",quantity:1, cost: "49.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/ChocolateKissCake-2022_400x.jpg?v=1655482947"},
          ]

          commit('SET_CAKES',data)
        },500)
      } catch (err) {

      }

    },
    async get_data_cake1({commit}){
      try{
        setTimeout(()=>{
          const data_cake1 = [
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/S_moreCake_400x.jpg?v=1659447196",
              title: "1.S'MORE CAKE\n " ,
              name: "Note - this cake is not available in gluten free or vegan.Writing is not available on this cake.\n" +
                  "Photos are of a 6 inch cake.For orders required sooner than 48 hours and for any special requests, please contact our order team."
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0090/8433/8233/products/PaletteWatercolourCake-WithWriting_400x.jpg?v=1650398176",
              title:"2.WATERCOLOUR PALETTE CAKE\n " ,
              name:  "Bold and Vibrant!  Meet the newest addition to our cake line.Three layers of chocolate or vanilla cake decorated with vanilla buttercream.\n" +
                  "Customize this cake by selecting your own colour palette.\n" +
                  "Double writing is ONLY available on this cake, in pre-selected messages.\n" +
                  "Photos are of a 6 inch cake - photographed with Fuchsia.\n" +
                  "Gluten free is only available in a 6'' size with chocolate cake.  Not available in Vegan.\n" +
                  "For orders required sooner than 48 hours and for any special requests, please contact our order team."
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/SpringFloralCake-2022_400x.jpg?v=1650394301",
              title:"3.SPRING FLORAL CAKE\n" ,
              name:  "Welcome Spring with a lively pop of colour!\n" +
                  "                Three layers of chocolate or vanilla cake decorated with vanilla buttercream.\n" +
                  "                Buttercream colours are not customizable.\n" +
                  "                *Gluten free is only available in a 6\" size with chocolate cake.\n" +
                  "                Not available as vegan. Photos are of a 6 inch cake.\n" +
                  "                Orders for our Spring Floral cake require a minimum of 48 hours notice."
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/TwixCake-2022_400x.jpg?v=1655481934",
              title:"4.TWIX CAKE\n" ,
              name:    " Vanilla cake with salted caramel in the layers, decorated with caramel vanilla buttercream in a chocolate watercolour design.\n" +
                  "            Topped with a wreath of buttercream and Twix bars with caramel in the centre.\n" +
                  "            Please note writing is not available on this cake.\n" +
                  "            Photos are of a 6 inch cake.\n" +
                  "            For orders required sooner than 24 hours, and for any special requests please contact our order team."
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0090/8433/8233/products/GermanChocolateCake_400x.jpg?v=1593111035",
              title:"5.GERMAN CHOCOLATE CAKE" ,
              name:"The ultimate indulgence.\n" +
                  "            Three layers of rich chocolate cake layered with whipped Carmelia milk chocolate ganache and topped with sweet coconut pecan filling.\n" +
                  "            Please note writing is not available on this cake.\n" +
                  "            Photos are of a 6 inch cake.\n" +
                  "            For any special requests please contact our order team."
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0023/6797/9619/products/20220427_130453_800x800.jpg?v=1651175883 ",
              title:"6.WHITE FLORAL CAKE\n" ,
              name:    " New look, same family recipe!  Turn your favourite cupcake into a cake! With this cake, you can choose any of our 13 cupcake flavours or create your own flavour from our current cake and icing choices! Finish off your personalized cake with a message written on top.\n" +
                  "\n" +
                  "            All of our cakes are baked and iced fresh for your order.\n" +
                  "\n" +
                  "            Photos are of a 6 inch cake.\n" +
                  "\n" +
                  "            For orders required sooner than 24 hours, and for any special requests please contact our order team.\n" +
                  "\n" +
                  "            This cake is often available as a same day cake. Give is a call to see if we have one for you in store today."
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0090/8433/8233/products/CraveDripCake_400x.jpg?v=1593128077",
              title:"7.DRIP CAKE\n" ,
              name:   " Three layers of cake, decorated with buttercream icing and topped with milk chocolate or white chocolate ganache.\n" +
                  "\n" +
                  "            This cake can also be turned into your favourite cupcake! You can choose any of our 13 cupcake flavours or create your own flavour from our current cake and icing choices!\n" +
                  "\n" +
                  "            Photos are of a 6 inch cake.\n" +
                  "\n" +
                  "            Pictured is Crave-o-licious, Vava Vanilla, Just Chocolate, Mint and Princess Strawberry."
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0090/8433/8233/products/ChocolateKissCake-2022_400x.jpg?v=1655482947",
              title:"8.VEGAN CAKE\n" ,
              name:   "       We are excited to offer a vegan cake!\n" +
                  "            Our vegan cake and frosting are made without dairy and eggs.\n" +
                  "            Three layers of chocolate vegan cake decorated with chocolate frosting.\n" +
                  "            This cake is only available in a 6\" size - chocolate cake with chocolate frosting.\n" +
                  "            Please note writing is not available on this cake.\n" +
                  "            Photos are of a 6 inch cake.\n" +
                  "            \n" +
                  "            Following are the ingredients used:\n" +
                  "            \n" +
                  "            Vegan Chocolate Cake:\n" +
                  "            White Sugar, Flour, Water, Canola Oil, Applesauce (apples, ascorbic acid), Cocoa, Baking soda, Baking Powder, Artificial Vanilla and salt.\n" +
                  "            \n" +
                  "            Vegan Frosting:\n" +
                  "            Icing Sugar, Vegan Butter Sticks (oil blend (palm, soybean, canola, flax, olive oil), water, salt, flavour, soy protein, soy lecithin, lactic acid, annatto), Cocoa, Oat Milk (water, oats, low euric rapeseed oil), Artificial Vanilla, Salt."
            },
          ]

          commit('SET_CAKE1',data_cake1)
        },500)
      } catch (err) {

      }

    },
    async get_data_cup({commit}){
      try{
        setTimeout(()=>{
          const data_cup =[
            {id: 9,name: "BLUE CHAMPAGNE CUPCAKE",quantity:1, cost: "5.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/Crave-o-licious_Product_Main_4e17a4ad-9884-45f5-ae8c-cd4b689e3735_600x.jpg?v=1655502577"},
            {id:10,name: "DIRTY BLONDE CUPCAKE",quantity:1, cost: "5.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/GenderRevealVanillla_600x.jpg?v=1615230224"},
            {id:11,name: "COCONUT CHOCOLATE CUPCAKE ",quantity:1, cost: "5.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/coconutchocolatecupcake_0086ca89-5df8-4775-a877-f76929dfeb01_600x.jpg?v=1655503627"},
            {id:12,name: "MINT CHIP CUPCAKE ", quantity:1,cost: "4.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/MintChipCupcake_d544cda8-dd2d-4a75-bbb5-4c20f2a94ac0_600x.jpg?v=1655503612"},
            {id:13,name: "STRAWBERRY VANILLA CUPCAKE",quantity:1, cost: "6.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/Crave_VavaVanilla_6d483724-e2ed-4568-ba39-8ce78395799f_600x.jpg?v=1655503627"},
            {id:14,name: "LEMON DROP CUPCAKE",quantity:1, cost: "4.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/RedVelvet_Product_Main_600x.jpg?v=1655503613"},
            {id:15,name: "RED VELVET CUPCAKE",quantity:1, cost: "4.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/Crave_PrincessChocolate_2018_d2f95165-c3fc-49d6-94a6-8c97bfacc7b0_600x.jpg?v=1655503627"},
            {id:16,name: "KONA CUPCAKE",quantity:1, cost: "4.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/Crave_PrincessVanilla_2018_600x.jpg?v=1655503627"},
          ]

          commit('SET_CUPCAKES',data_cup)
        },500)
      } catch (err) {

      }

    },
    async get_data_cupcake1({commit}){
      try{
        setTimeout(()=>{
          const data_cupcake1 = [
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/Crave-o-licious_Product_Main_4e17a4ad-9884-45f5-ae8c-cd4b689e3735_600x.jpg?v=1655502577",
              title: "1.BLUE CHAMPAGNE CUPCAKE\n " ,
              name: "INGREDIENTS\n" +
                  "1 cup of blueberry\n" +
                  "300 ml champagne (or Prosecco)\n" +
                  "110 g unsalted butter, softened\n" +
                  "500 g icing sugar\n" +
                  "1/2 tsp. vanilla extract\n" +
                  "1/2 tsp. salt\n" +
                  "Gold sugar, for garnish" +
                  " \n"
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0090/8433/8233/products/GenderRevealVanillla_600x.jpg?v=1615230224",
              title:"2.DIRTY BLONDE CUPCAKE\n " ,
              name: "Ingredients\n" +
                  "VANILLA CUPCAKES\n" +
                  "\n" +
                  "2 1/2 cups (325g) all purpose flour\n" +
                  "2 cups (414g) sugar\n" +
                  "3 tsp baking powder\n" +
                  "1 tsp salt\n" +
                  "1 cup (240ml) milk\n" +
                  "1/2 cup (120ml) vegetable oil\n" +
                  "1 tbsp vanilla extract\n" +
                  "2 large eggs\n" +
                  "1 cup (240ml) water*",
              "VANILLA FROSTING": +
                  "1 cup (224g) unsalted butter, room temperature" +
                  "4 cups (460g) powdered sugar" +
                  "1 1/2 tsp vanilla extract" +
                  "2–3 tbsp (30-45ml) water or milk" +
                  "pinch of salt"
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/coconutchocolatecupcake_0086ca89-5df8-4775-a877-f76929dfeb01_600x.jpg?v=1655503627",
              title:"3.COCONUT CHOCOLATE CUPCAKE\n" ,
              name: "Ingredients\n" +
                  "\n" +
                  " 1 ¼ cups (170 g/6 oz) all-purpose flour\n" +
                  " 1 teaspoon baking powder\n" +
                  " ¼ teaspoon salt\n" +
                  " ½ cup (1 stick/115 g) unsalted butter, softened\n" +
                  " 1 cup (200 g/7 oz) granulated sugar\n" +
                  " 2 large eggs , at room temperature\n" +
                  " 1 teaspoon pure vanilla extract\n" +
                  " ½ cup (120 ml) canned coconut milk, or coconut cream, or whole milk\n" +
                  " ½ cup (sweetened or unsweetened) shredded coconut\n" +
                  " Cream cheese frosting*\n" +
                  " 1-2 cups sweetened shredded coconut , for topping"
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/MintChipCupcake_d544cda8-dd2d-4a75-bbb5-4c20f2a94ac0_600x.jpg?v=1655503612",
              title:"4.MINT CHIP CUPCAKE\n" ,
              name: "Ingredients\n" +
                  "Flour: This recipe calls for all-purpose flour." +
                  " The crumb isn’t as tight as when using cake flour, the but the cupcakes remain incredibly soft.\n" +
                  "Unsweetened cocoa powder: I prefer dutch process. It adds a ton of chocolate flavor.\n" +
                  "Oil and Butter: Vegetable oil and unsalted sweet cream butter are both used in this recipe. " +
                  "Cocoa powder can tend to dry out baked goods, so both are needed to provide extra moisture for the cupcakes.\n" +
                  "Sugar: Both granulated and light brown sugar are used in this recipe for sweetness." +
                  " Brown sugar also helps to keep the cupcakes from drying out.\n" +
                  "Eggs: Eggs help to hold the cupcakes together and add richness. They should be at room temperature.\n" +
                  "Leavening: Both baking soda and baking powder are used to make these cupcakes rise.\n" +
                  "Vanilla Extract: I almost always use homemade vanilla extract but any high-quality pure vanilla will work." +
                  " Vanilla bean paste is also a great option if you want more flavor.\n" +
                  "Salt: Just a little salt is added to balance the flavors.\n" +
                  "Milk: Milk adds light moisture to these cupcakes.\n" +
                  "Confectioners’ sugar: For sweetness and smooth consistency in the frosting.\n" +
                  "Salt: Just a pinch is all you need.\n" +
                  "Heavy Cream: Creates a silky frosting texture.\n" +
                  "Green mint extract: You can use peppermint extract if you can’t find green mint.\n" +
                  "Green food coloring: You can use as much or as little as you want – I like a light green colored frosting so only use 3-4 drops.\n" +
                  "Andes crème de menthe – Unwrapped, for garnish"
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0090/8433/8233/products/Crave_VavaVanilla_6d483724-e2ed-4568-ba39-8ce78395799f_600x.jpg?v=1655503627",
              title:"5.STRAWBERRY VANILLA CUPCAKE" ,
              name: "For the Strawberry Cupcakes\n" +
                  "All Purpose Flour\n" +
                  "Baking powder and Baking Soda: The combination of the two gives this cupcake the ultimate texture.\n" +
                  "Salt: For flavor.\n" +
                  "Butter: Unsalted and melted, since this recipe doesn’t cream the butter.\n" +
                  "Sugar\n" +
                  "Vanilla Extract\n" +
                  "Eggs: Large sized eggs.\n" +
                  "Sour Cream: Not only does sour cream add moisture, it also helps to keep the batter thick enough so that the strawberries don’t all sink to the bottom of your cupcakes.\n" +
                  "Milk\n" +
                  "Chopped Strawberries: One and half cups of chopped strawberries for cupcakes that are loaded with flavor!\n" +
                  "For the Strawberry Buttercream\n" +
                  "Strawberries: You’ll need about 1 1/2 cups of chopped strawberries, measured after chopping.\n" +
                  "Unsalted Butter: Control the amount of salt in your buttercream by adding it yourself. Butter should be room temperature.\n" +
                  "Powdered Sugar: For volume and thickness.\n" +
                  "Vanilla Extract: For flavor.\n" +
                  "Salt: To taste"
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0090/8433/8233/products/RedVelvet_Product_Main_600x.jpg?v=1655503613",
              title:"6.LEMON DROP CUPCAKE\n" ,
              name: "Ingredients\n" +
                  "-1 2/3 cup all-purpose flour 213g.\n" +
                  "-1 cup granulated sugar 200g.\n" +
                  "-2 tbsp lemon zest zest of two lemons.\n" +
                  "-1/4 tsp baking soda.\n" +
                  "-1 1/2 tsp baking powder.\n" +
                  "-1/4 tsp kosher salt.\n" +
                  "-3/4 cup unsalted butter 170g, melted.\n" +
                  "-2 eggs room temperature."
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0090/8433/8233/products/Crave_PrincessChocolate_2018_d2f95165-c3fc-49d6-94a6-8c97bfacc7b0_600x.jpg?v=1655503627",
              title:"7.RED VELVET CUPCAKE\n" ,
              name: "Ingredients" +
                  "Cake flour – This low protein flour is specifically to make the crumb of cakes more tender. For Red Velvet Cupcakes, it also makes the dome more nicely rounded compared to using plain flour (all purpose flour).\n" +
                  "\n" +
                  "If you use plain / all purpose flour, the cupcake is still excellent, however, you will notice that the dome has a bit more of a peak to it. Not drastic or offensive, and it’s hidden under the frosting anyway!\n" +
                  "\n" +
                  "My advice? Worth hunting down cake flour if you’re making this for a special occasion / wanting to show off. Otherwise, don’t make a special trip to the store.\n" +
                  "\n" +
                  "Buttermilk – Fermented milk that is thicker than plain milk but thinner than cream, with a slight tang. An ingredient used in baking for flavour (the subtle background tang is a signature characteristic of Red Velvet Cupcakes), and to make cakes lighter because the acid in it helps tenderise gluten.\n" +
                  "\n" +
                  "It is also commonly used in baking to make cakes lighter because the acid in buttermilk activates baking soda to make cakes rise. However, this doesn’t apply to Red Velvet Cupcakes because we’re using baking powder instead which already has acid in it to activate the rising power.\n" +
                  "\n" +
                  "Don’t have buttermilk? Make it yourself. It just requires lemon juice or vinegar and milk! Directions in recipe notes.\n" +
                  "\n" +
                  "Baking powder – To make the cupcakes rise! Note: I use baking soda for Red Velvet Cake. But for cupcakes, I prefer baking powder because it gives the cupcakes a prettier dome (baking soda gives it a slightly unsightly peak).\n" +
                  "\n" +
                  "Vinegar – This is sometimes used in baking recipes that use baking soda as the leavening agent to make them rise, such as in my Red Velvet Cake recipe, because the vinegar gives the baking soda a kick start in the rising process.\n" +
                  "\n" +
                  "However, it also plays a part in the tenderness of the crumb because acid helps breakdown gluten (as noted above in buttermilk). And interestingly, I found that using vinegar helps preserve the vibrant red colour in the cupcakes.\n" +
                  "\n" +
                  "So even though we are not using baking soda in this recipe, vinegar stays in!\n" +
                  "\n" +
                  "Oil AND butter – Yes, both are necessary in this recipe for best results! We love butter for flavour, but it doesn’t make things moist. Oil makes cakes moist but doesn’t add flavour. So use both!\n" +
                  "\n" +
                  "Vanilla – Vanilla extract trumps artificial vanilla essence. Don’t waste vanilla bean on this recipe.\n" +
                  "\n" +
                  "Cocoa powder – Just a bit, for the subtle chocolate flavour we know and love about Red Velvet! Standard cocoa powder is called for here, though the more intense flavoured dutch processed works just fine too.\n" +
                  "\n" +
                  "Sugar – Caster sugar / superfine sugar works best here because it dissolves more easily into the batter. But granulated / ordinary white sugar can be used if that’s all you’ve got.\n" +
                  "\n" +
                  "Red food colouring – To make the cupcake RED! Using ordinary food colouring (rather than intense gel) you need 1 whole tablespoon of red food colouring. If using gel, dip-and-smear a toothpick 3 times, and match the batter colour to the photos below.\n" +
                  "\n" +
                  "Eggs "
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0090/8433/8233/products/Crave_PrincessVanilla_2018_600x.jpg?v=1655503627",
              title:"8.KONA CUPCAKE\n" ,
              name: "Ingredients\n" +
                  "1 cup butter, softened.\n" +
                  "1-1/4 cups sugar.\n" +
                  "1/8 teaspoon pink paste food coloring.\n" +
                  "3 large eggs, room temperature.\n" +
                  "1 teaspoon vanilla extract.\n" +
                  "2-1/2 cups all-purpose flour.\n" +
                  "1-1/2 teaspoons baking powder.\n" +
                  "1/4 teaspoon baking soda."
            },
          ]

          commit('SET_CUPCAKE1',data_cupcake1)
        },500)
      } catch (err) {

      }

    },
    async get_data_coo({commit}){
      try{
        setTimeout(()=>{
          const data_coo = [
            {id:17,name: "S'MORE COOKIE",quantity:1, cost: "3.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/SmoreCookie-22_600x.jpg?v=1650992495"},
            {id:18,name: "DOUBLE CHOCOLATE OATMEAL COOKIE",quantity:1, cost: "3.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/DoubleChocolateOatmealCookie2_600x.jpg?v=1660164753"},
            {id:19,name: "SWEET & SALTY COOKIE",quantity:1, cost: "3.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/BakersSurpriseCookie_600x.jpg?v=1660166749"},
            {id:20,name: "TOFFEE ALMOND OATMEAL COOKIE",quantity:1, cost: "3.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/ToffeeAlmondOatmeal_Dipped_600x.jpg?v=1661285674"},
            {id:21,name: "COOKIE ASSORTMENT",quantity:1, cost: "3.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/FallCookie6Pack_600x.jpg?v=1661286689"},
            {id:22,name: "RITZ COOKIE",quantity:1, cost: "3.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/RitzCookie_9b38f9cc-3504-4751-93cd-4054d3418881_600x.jpg?v=1593124360"},
            {id:23,name: "BROWNIE STUFFED CHUNK COOKIE",quantity:1, cost: "3.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/BrownieCookie_600x.jpg?v=1593138822"},
            {id:24,name: "SALTED CHOCOLATE CHUNK COOKIE", cost: "3.80", image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/SaltedChocolateChunkCookie_600x.jpg?v=1605290187"},
          ]
          commit('SET_COOKIES',data_coo)
        },500)
      } catch (err) {

      }

    },
    async get_data_cookie1({commit}){
      try{
        setTimeout(()=>{
          const data_cookie1 = [
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/SmoreCookie-22_600x.jpg?v=1650992495",
              title: "GINGER CREAM COOKIE\n " ,
              name: "COOKIES\n" +
                  "2 cups flour\n" +
                  "1 cups (2 sticks) Challenge Unsalted Butter, room temperature\n" +
                  "½ cup powdered sugar\n" +
                  "1 teaspoon cinnamon\n" +
                  "1 teaspoon ginger\n" +
                  "⅛ nutmeg\n" +
                  "⅛ ground cloves (pinch)\n" +
                  "⅛ allspice\n" +
                  "pinch salt\n" +
                  "FILLING\n" +
                  "10 ounces white candy melts\n" +
                  "¼ cup whole milk\n" +
                  "¼ cup (½ stick) Challenge Butter, room temperature, cubed"
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/DoubleChocolateOatmealCookie2_600x.jpg?v=1660164753",
              title:"2.DOUBLE CHOCOLATE OATMEAL COOKIE\n " ,
              name: "Ingredients\n" +
                  "1 1/2 cups (212g) all-purpose flour (scoop and level to measure)\n" +
                  "1 tsp ground cinnamon.\n" +
                  "1 cup (226g) unsalted butter, softened slightly (it should still be somewhat cold and firm)\n" +
                  "1 cup (200g) packed light brown sugar.\n" +
                  "1/2 cup (100g) granulated sugar.\n" +
                  "1 1/2 tsp vanilla extract."
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/BakersSurpriseCookie_600x.jpg?v=1660166749",
              title:"3.SWEET & SALTY COOKIE\n" ,
              name: "Ingredients of Salted Biscuits\n" +
                  "Butter  - 60 gms.\n" +
                  "Sugar  - 50 gms.\n" +
                  "Black Sesame Seeds  - 1 tbsp.\n" +
                  "Baking Soda - 1 tsp.\n" +
                  "All-Purpose Flour - 136 gms.\n" +
                  "Salt - 1 tsp.\n" +
                  "Milk  - 4-5 tbsp (add gradually as required)\n" +
                  "Estimated Calories: 1120."
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/ToffeeAlmondOatmeal_Dipped_600x.jpg?v=1661285674",
              title:"4.TOFFEE ALMOND OATMEAL COOKIE\n" ,
              name: "Ingredients\n" +
                  "2 cups raw whole almonds or almond slivers.\n" +
                  "1 1/2 cups all-purpose flour.\n" +
                  "1 teaspoon baking powder.\n" +
                  "1/2 teaspoon kosher salt, or sea salt.\n" +
                  "3 cups old-fashioned oats.\n" +
                  "1 cup unsalted butter, at room temperature.\n" +
                  "1 1/2 cups packed brown sugar.\n" +
                  "2 large eggs."
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/FallCookie6Pack_600x.jpg?v=1661286689",
              title:"5.COOKIE ASSORTMENT" ,
              name: "Ingredients\n" +
                  "\n" +
                  "Preparation time: 45 minutes\n" +
                  "\n" +
                  "Cooking time: 1 hour 15 minutes\n" +
                  "\n" +
                  "180g/6ozs. butter, softened\n" +
                  "200g/7ozs. caster or superfine sugar\n" +
                  "180g/6ozs. brown sugar\n" +
                  "2 eggs, at room temperature\n" +
                  "2 teaspoons vanilla\n" +
                  "2.5 cups plain all purpose flour\n" +
                  "1 teaspoon bicarb\n" +
                  "1/2 teaspoon fine salt"
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/RitzCookie_9b38f9cc-3504-4751-93cd-4054d3418881_600x.jpg?v=1593124360",
              title:"6.RITZ COOKIE\n" ,
              name: " \"Ingredients\\n\" +\n" +
                  "                  \"\\n\" +\n" +
                  "                  \"Preparation time: 45 minutes\\n\" +\n" +
                  "                  \"\\n\" +\n" +
                  "                  \"Cooking time: 1 hour 15 minutes\\n\" +\n" +
                  "                  \"\\n\" +\n" +
                  "                  \"180g/6ozs. butter, softened\\n\" +\n" +
                  "                  \"200g/7ozs. caster or superfine sugar\\n\" +\n" +
                  "                  \"180g/6ozs. biscuits\\n\" +\n" +
                  "                  \"2 eggs, at room temperature\\n\" +\n" +
                  "                  \"2 teaspoons vanilla\\n\" +\n" +
                  "                  \"2.5 cups plain all purpose flour\\n\" +\n" +
                  "                  \"1 teaspoon bicarb\\n\" +\n" +
                  "                  \"1/2 teaspoon fine salt\""
            },
            {
              image: "https://cdn.shopify.com/s/files/1/0090/8433/8233/products/BrownieCookie_600x.jpg?v=1593138822",
              title:"7.BROWNIE STUFFED CHUNK COOKIE\n" ,
              name: "Ingredients" +
                  "For Chocolate Chip Cookies\n" +
                  "2 ½ cups all-purpose flour\n" +
                  "1 teaspoon corn starch\n" +
                  "1 teaspoon baking soda\n" +
                  "¾ teaspoon salt\n" +
                  "¾ cup unsalted butter room temperature\n" +
                  "1 cup firmly packed brown sugar\n" +
                  "¾ cup granulated sugar\n" +
                  "1 large egg room temperature\n" +
                  "1 egg yolk room temperature\n" +
                  "2½ teaspoons vanilla extract\n" +
                  "1 ½ cups chocolate chips\n" +
                  "For the Brownies\n" +
                  "½ cup all-purpose flour\n" +
                  "3 tablespoons cocoa powder\n" +
                  "¼ teaspoon salt\n" +
                  "4 tablespoons unsalted butter\n" +
                  "½ cup granulated sugar\n" +
                  "4 oz semisweet chocolate\n" +
                  "1 teaspoon vanilla extract\n" +
                  "1 large egg room temperature"
            },
            {
              image:"https://cdn.shopify.com/s/files/1/0090/8433/8233/products/SaltedChocolateChunkCookie_600x.jpg?v=1605290187",
              title:"8.SALTED CHOCOLATE CHUNK COOKIE\n" ,
              name: "Ingredients\n" +
                  "1 ¾ cups all-purpose flour\n" +
                  "1 ¼ teaspoons baking soda\n" +
                  "1 teaspoon baking powder\n" +
                  "½ teaspoon kosher salt\n" +
                  "½ cup unsalted butter, softened\n" +
                  "¾ cup light brown sugar, packed\n" +
                  "½ cup granulated sugar\n" +
                  "2 large eggs\n" +
                  "1 ½ teaspoons vanilla extract\n" +
                  "8 ounces bittersweet chocolate, coarsely chopped\n" +
                  "Flaky sea salt or Maldon"
            },
          ]

          commit('SET_COOKIE1',data_cookie1)
        },500)
      } catch (err) {

      }

    },
    async login ({commit}){
      try{
        setTimeout(() =>{
          commit('SET_USER',{
            name:'Bianca',
            role:'member'
          })
          router.push('/home')
        },1000)
      }catch (e) {
        console.log(e)

      }
    },
    async logout({commit}){
      commit('SET_USER',{})
    }

  },
  modules: {},
  computed:{}
})

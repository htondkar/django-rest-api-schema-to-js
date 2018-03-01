/*
  -auth-change-email-create:
  Use this endpoint to change user email
  ---------- Fields -----------
  new_email: string in body [*required]
  password: string in body [*required]
*/
const createEmailChangeAuth = body =>
  axios.post(`${BASE_URL}/auth/change-email/`, body, getConfig())

/*
  -auth-change-password-create:
  Use this endpoint to change user password
  ---------- Fields -----------
  current_password: string in body [*required]
  new_password: string in body [*required]
*/
const createPasswordChangeAuth = body =>
  axios.post(`${BASE_URL}/auth/change-password/`, body, getConfig())

/*
  -auth-current-user-list:
  Gives the basic info of the current user.
  ---------- Fields -----------
  page: integer in url query params
*/
const getAuthCurrent = () =>
  axios.get(`${BASE_URL}/auth/current-user/`, getConfig())

/*
  -auth-login-create:
  Use this endpoint to obtain user auth token
  ---------- Fields -----------
  username: string in body [*required]
  password: string in body [*required]
*/
const createLoginAuth = body =>
  axios.post(`${BASE_URL}/auth/login/`, body, getConfig())

/*
  -auth-login-as-create:
  Managers can use this endpoint to login as an user
  ---------- Fields -----------
  username: string in body [*required]
*/
const createAsLoginAuth = body =>
  axios.post(`${BASE_URL}/auth/login-as/`, body, getConfig())

/*
  -cms-contacts-list:
  Gives a list of contact info
  ---------- Fields -----------
  page: integer in url query params
*/
const getCmsContacts = () => axios.get(`${BASE_URL}/cms/contacts/`, getConfig())

/*
  -cms-pages-list:
  No Description
  ---------- Fields -----------
  page: integer in url query params
*/
const getCmsPages = () => axios.get(`${BASE_URL}/cms/pages/`, getConfig())

/*
  -fields-field-create:
  This endpoint is used to create a field with any type. Although it only shows the general fields options on the schema, it accepts and excepts all the options needed for the given type.
  ---------- Fields -----------
  type: enum in body  | enum: [number,money,short_text,long_text,website,email,phone,checkbox,yes_no,choice,dropdown,multiple_select,matrix,time,date,file,generic_field]
  title: string in body
  description: string in body
  position: integer in body
  required: boolean in body
  unique: boolean in body
*/
const createFieldFields = body =>
  axios.post(`${BASE_URL}/fields/field/`, body, getConfig())

/*
  -fields-field-read:
  Read a field's data
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getFieldsField = slug =>
  axios.get(`${BASE_URL}/fields/field/${slug}/`, getConfig())

/*
  -fields-field-update:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
  title: string in body
  description: string in body
  position: integer in body
  required: boolean in body
  unique: boolean in body
*/
const updateFieldFields = (slug, body) =>
  axios.put(`${BASE_URL}/fields/field/${slug}/`, body, getConfig())

/*
  -fields-field-partial_update:
  update a field's data. Although it only shows the general fields options on the schema, it accepts and excepts all the options needed for the given field's type.
  ---------- Fields -----------
  slug: string in url query params [*required]
  title: string in body
  description: string in body
  position: integer in body
  required: boolean in body
  unique: boolean in body
*/
const partialUpdateFieldFields = (slug, body) =>
  axios.patch(`${BASE_URL}/fields/field/${slug}/`, body, getConfig())

/*
  -fields-field-delete:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getFieldsField = slug =>
  axios.delete(`${BASE_URL}/fields/field/${slug}/`, getConfig())

/*
  -inventories-add-create:
  Use this endpoint to add an inventory to your panel
  ---------- Fields -----------
  title: string in body [*required]
  phone_number: string in body
  address: string in body
  description: string in body
*/
const createAddInventories = body =>
  axios.post(`${BASE_URL}/inventories/add/`, body, getConfig())

/*
  -inventories-inventory-read:
  Shows an inventory's data
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getInventoriesInventory = slug =>
  axios.get(`${BASE_URL}/inventories/inventory/${slug}/`, getConfig())

/*
  -inventories-list-list:
  Use this endpoint to get the list of inventories in your panel
  ---------- Fields -----------
  page: integer in url query params
*/
const getInventoriesList = () =>
  axios.get(`${BASE_URL}/inventories/list/`, getConfig())

/*
  -panel-accesses-list:
  Shows a list of panel accesses
  ---------- Fields -----------
  page: integer in url query params
*/
const getPanelAccesses = () =>
  axios.get(`${BASE_URL}/panel/accesses/`, getConfig())

/*
  -payment-payment-methods-list:
  No Description
  ---------- Fields -----------
  page: integer in url query params
*/
const getPaymentPayment = () =>
  axios.get(`${BASE_URL}/payment/payment-methods/`, getConfig())

/*
  -profiles-guest-create:
  Signs up a profile in system.
  ---------- Fields -----------
  guest: boolean in body
*/
const createGuestProfiles = body =>
  axios.post(`${BASE_URL}/profiles/guest/`, body, getConfig())

/*
  -profiles-merchant-create:
  Signs up a merchant in system.
  ---------- Fields -----------
  store_title: string in body [*required]
  password: string in body [*required]
  first_name: string in body [*required]
  email: string in body
  phone_number: string in body [*required]
*/
const createMerchantProfiles = body =>
  axios.post(`${BASE_URL}/profiles/merchant/`, body, getConfig())

/*
  -profiles-merchant-read:
  Gives full merchant information.
  ---------- Fields -----------
  id: integer in url query params [*required]
*/
const getProfilesMerchant = id =>
  axios.get(`${BASE_URL}/profiles/merchant/${id}/`, getConfig())

/*
  -profiles-profile-create:
  Signs up a profile in system.
  ---------- Fields -----------
  password: string in body [*required]
  first_name: string in body [*required]
  email: string in body
  phone_number: string in body [*required]
  guest: boolean in body
*/
const createProfileProfiles = body =>
  axios.post(`${BASE_URL}/profiles/profile/`, body, getConfig())

/*
  -profiles-profile-read:
  Gives full profile information.
  ---------- Fields -----------
  id: integer in url query params [*required]
*/
const getProfilesProfile = id =>
  axios.get(`${BASE_URL}/profiles/profile/${id}/`, getConfig())

/*
  -shelves-product-read:
  Show the full information of a product
  ---------- Fields -----------
  product_slug: string in url query params [*required]
*/
const getShelvesProduct = product_slug =>
  axios.get(`${BASE_URL}/shelves/product/${product_slug}/`, getConfig())

/*
  -shelves-products-list:
  Show the list of products in a store
  ---------- Fields -----------
  page: integer in url query params
*/
const getShelvesProducts = () =>
  axios.get(`${BASE_URL}/shelves/products/`, getConfig())

/*
  -stores-list-list:
  Shows a list of stores for customer.
  ---------- Fields -----------
  page: integer in url query params
*/
const getStoresList = () => axios.get(`${BASE_URL}/stores/list/`, getConfig())

/*
  -stores-store-read:
  Shows store data for customer.
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getStoresStore = slug =>
  axios.get(`${BASE_URL}/stores/store/${slug}/`, getConfig())

/*
  -support-contacts-list:
  Get a list of contact info.
  ---------- Fields -----------
  page: integer in url query params
*/
const getSupportContacts = () =>
  axios.get(`${BASE_URL}/support/contacts/`, getConfig())

/*
  -auth-email-request-verification-create:
  Use this endpoint to send email to user with password email verification link.
  ---------- Fields -----------

*/
const createVerificationRequestEmail = body =>
  axios.post(`${BASE_URL}/auth/email/request-verification/`, body, getConfig())

/*
  -auth-email-verify-create:
  Use this endpoint to verify user email
  ---------- Fields -----------
  token: string in body [*required]
  email: string in body [*required]
*/
const createVerifyEmailAuth = body =>
  axios.post(`${BASE_URL}/auth/email/verify/`, body, getConfig())

/*
  -auth-mobile-request-verification-create:
  Use this endpoint to send email to user with password email verification link.
  ---------- Fields -----------

*/
const createVerificationRequestMobile = body =>
  axios.post(`${BASE_URL}/auth/mobile/request-verification/`, body, getConfig())

/*
  -auth-mobile-verify-create:
  Use this endpoint to verify user email
  ---------- Fields -----------
  token: string in body [*required]
  phone_number: string in body [*required]
*/
const createVerifyMobileAuth = body =>
  axios.post(`${BASE_URL}/auth/mobile/verify/`, body, getConfig())

/*
  -cms-pages-page-read:
  No Description
  ---------- Fields -----------
  url: string in url query params [*required]
*/
const getCmsPages = url =>
  axios.get(`${BASE_URL}/cms/pages/page/${url}/`, getConfig())

/*
  -fields-list-mine-list:
  Return a list of fields that the current user has created.
  ---------- Fields -----------
  page: integer in url query params
*/
const getFieldsList = () =>
  axios.get(`${BASE_URL}/fields/list/mine/`, getConfig())

/*
  -fields-list-template-list:
  Return a list of suggested fields.
  ---------- Fields -----------
  page: integer in url query params
*/
const getFieldsList = () =>
  axios.get(`${BASE_URL}/fields/list/template/`, getConfig())

/*
  -fields-types-choice-create:
  Use this endpoint to create a radio choice input field.
  ---------- Fields -----------
  choice_items: array in body [*required]
  title: string in body
  description: string in body
  position: integer in body
  required: boolean in body
  unique: boolean in body
*/
const createChoiceTypesFields = body =>
  axios.post(`${BASE_URL}/fields/types/choice/`, body, getConfig())

/*
  -fields-types-file-create:
  Use this endpoint to create a file input field.
  ---------- Fields -----------
  title: string in body
  description: string in body
  position: integer in body
  required: boolean in body
  unique: boolean in body
  file_type: enum in body  | enum: [image,document,all]
  max_size: integer in body
*/
const createFileTypesFields = body =>
  axios.post(`${BASE_URL}/fields/types/file/`, body, getConfig())

/*
  -fields-types-number-create:
  Use this endpoint to create a number input field.
  ---------- Fields -----------
  title: string in body
  description: string in body
  position: integer in body
  required: boolean in body
  unique: boolean in body
  min_value: integer in body
  max_value: integer in body
*/
const createNumberTypesFields = body =>
  axios.post(`${BASE_URL}/fields/types/number/`, body, getConfig())

/*
  -fields-types-short_text-create:
  Use this endpoint to create a short text input field.
  ---------- Fields -----------
  title: string in body
  description: string in body
  position: integer in body
  required: boolean in body
  unique: boolean in body
  max_length: integer in body
*/
const createShortTextTypesFields = body =>
  axios.post(`${BASE_URL}/fields/types/short_text/`, body, getConfig())

/*
  -fields-types-yes_no-create:
  Use this endpoint to create a yes/no input field.
  ---------- Fields -----------
  title: string in body
  description: string in body
  position: integer in body
  required: boolean in body
  unique: boolean in body
*/
const createYesNoTypesFields = body =>
  axios.post(`${BASE_URL}/fields/types/yes_no/`, body, getConfig())

/*
  -inventories-inventory-edit-update:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
  title: string in body [*required]
  phone_number: string in body
  address: string in body
  description: string in body
*/
const updateEditInventoryInventories = (slug, body) =>
  axios.put(
    `${BASE_URL}/inventories/inventory/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -inventories-inventory-edit-partial_update:
  Use this endpoint to update an inventory's data
  ---------- Fields -----------
  slug: string in url query params [*required]
  title: string in body
  phone_number: string in body
  address: string in body
  description: string in body
*/
const partialUpdateEditInventoryInventories = (slug, body) =>
  axios.patch(
    `${BASE_URL}/inventories/inventory/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -inventories-inventory-edit-delete:
  Removes an inventory.
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getInventoriesInventory = slug =>
  axios.delete(`${BASE_URL}/inventories/inventory/${slug}/edit/`, getConfig())

/*
  -orders-cart-add-create:
  Adds given items to cart.
  ---------- Fields -----------
  product: string in body [*required]
  sub_product: string in body
  count: integer in body
*/
const createAddCartOrders = body =>
  axios.post(`${BASE_URL}/orders/cart/add/`, body, getConfig())

/*
  -orders-cart-remove-create:
  Removes the given item from cart.
  ---------- Fields -----------
  product: string in body [*required]
  sub_product: string in body
*/
const createRemoveCartOrders = body =>
  axios.post(`${BASE_URL}/orders/cart/remove/`, body, getConfig())

/*
  -orders-cart-set-create:
  Takes a list of product (and sub product) slugs along with their count, and updates items in cart with the given counts.
  ---------- Fields -----------
  product: string in body [*required]
  sub_product: string in body
  count: integer in body
*/
const createSetCartOrders = body =>
  axios.post(`${BASE_URL}/orders/cart/set/`, body, getConfig())

/*
  -orders-cart-show-list:
  Shows the cart items and data for the current user.
  ---------- Fields -----------
  page: integer in url query params
*/
const getOrdersCart = () =>
  axios.get(`${BASE_URL}/orders/cart/show/`, getConfig())

/*
  -orders-coupon-check-create:
  Checks a coupon code for user and their cart. If coupon code is valid, it tells the new pricing.
  ---------- Fields -----------
  coupon_code: string in body [*required]
*/
const createCheckCouponOrders = body =>
  axios.post(`${BASE_URL}/orders/coupon/check/`, body, getConfig())

/*
  -orders-order-create-create:
  Creates an order for user from their cart. If payment method is not provided, it's set on "pay with cash".
  ---------- Fields -----------
  payment_method: string in body [*required]
  delivering_address: string in body
  coupon_code: string in body
  first_name: string in body
  phone_number: string in body
  email: string in body
*/
const createCreateOrderOrders = body =>
  axios.post(`${BASE_URL}/orders/order/create/`, body, getConfig())

/*
  -orders-order-details-list:
  Takes an order code and shows order details.
  ---------- Fields -----------
  order_code: string in url query params [*required]
  page: integer in url query params
*/
const getOrdersOrder = order_code =>
  axios.get(`${BASE_URL}/orders/order/${order_code}/details/`, getConfig())

/*
  -orders-order-list-list:
  Shows the list of user orders.
  ---------- Fields -----------
  page: integer in url query params
*/
const getOrdersOrder = () =>
  axios.get(`${BASE_URL}/orders/order/list/`, getConfig())

/*
  -orders-special-order-create-create:
  Creates a special order with the given type. the attributes for the given type shall be submitted.
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const createCreateOrderSpecial = (slug, body) =>
  axios.post(
    `${BASE_URL}/orders/special-order/${slug}/create/`,
    body,
    getConfig()
  )

/*
  -orders-special-order-fields-list:
  Shows the list of custom attributes for the given order type.
  ---------- Fields -----------
  slug: string in url query params [*required]
  page: integer in url query params
*/
const getOrdersSpecial = slug =>
  axios.get(`${BASE_URL}/orders/special-order/${slug}/fields/`, getConfig())

/*
  -orders-special-order-list-list:
  Shows the list of special orders for the current user.
  ---------- Fields -----------
  slug: string in url query params [*required]
  page: integer in url query params
*/
const getOrdersSpecial = slug =>
  axios.get(`${BASE_URL}/orders/special-order/${slug}/list/`, getConfig())

/*
  -orders-special-order-pay-create:
  User this endpoint to pay the special order
  ---------- Fields -----------
  order_code: string in url query params [*required]
  payment_method: string in body [*required]
  delivering_address: string in body [*required]
*/
const createPayOrderSpecial = (order_code, body) =>
  axios.post(
    `${BASE_URL}/orders/special-order/${order_code}/pay/`,
    body,
    getConfig()
  )

/*
  -orders-special-order-show-list:
  Takes an order code and shows special order details.
  ---------- Fields -----------
  order_code: string in url query params [*required]
  page: integer in url query params
*/
const getOrdersSpecial = order_code =>
  axios.get(`${BASE_URL}/orders/special-order/${order_code}/show/`, getConfig())

/*
  -profiles-address-add-create:
  Adds an address to user profile
  ---------- Fields -----------
  title: string in body [*required]
  postal_code: string in body
  phone_number: string in body
  address: string in body [*required]
*/
const createAddAddressProfiles = body =>
  axios.post(`${BASE_URL}/profiles/address/add/`, body, getConfig())

/*
  -profiles-address-list-list:
  Show user address list view
  ---------- Fields -----------
  page: integer in url query params
*/
const getProfilesAddress = () =>
  axios.get(`${BASE_URL}/profiles/address/list/`, getConfig())

/*
  -profiles-address-update-update:
  Update an address item.
  ---------- Fields -----------
  address_slug: string in url query params [*required]
  title: string in body [*required]
  postal_code: string in body
  phone_number: string in body
  address: string in body [*required]
*/
const updateUpdateAddressProfiles = (address_slug, body) =>
  axios.put(
    `${BASE_URL}/profiles/address/${address_slug}/update/`,
    body,
    getConfig()
  )

/*
  -profiles-address-update-partial_update:
  Update an address item.
  ---------- Fields -----------
  address_slug: string in url query params [*required]
  title: string in body
  postal_code: string in body
  phone_number: string in body
  address: string in body
*/
const partialUpdateUpdateAddressProfiles = (address_slug, body) =>
  axios.patch(
    `${BASE_URL}/profiles/address/${address_slug}/update/`,
    body,
    getConfig()
  )

/*
  -profiles-address-update-delete:
  Removes an address item.
  ---------- Fields -----------
  address_slug: string in url query params [*required]
*/
const getProfilesAddress = address_slug =>
  axios.delete(
    `${BASE_URL}/profiles/address/${address_slug}/update/`,
    getConfig()
  )

/*
  -profiles-merchant-add-create:
  Add a merchant in system.
  ---------- Fields -----------
  password: string in body [*required]
  accesses: array in body [*required]
  first_name: string in body [*required]
  email: string in body
  phone_number: string in body [*required]
  is_admin: boolean in body
*/
const createAddMerchantProfiles = body =>
  axios.post(`${BASE_URL}/profiles/merchant/add/`, body, getConfig())

/*
  -profiles-merchant-edit-update:
  Updates the merchant information.
  ---------- Fields -----------
  id: integer in url query params [*required]
  accesses: array in body [*required]
  username: string in body [*required]
  first_name: string in body [*required]
  email: string in body
  phone_number: string in body [*required]
  avatar: string in body
  is_admin: boolean in body
*/
const updateEditMerchantProfiles = (id, body) =>
  axios.put(`${BASE_URL}/profiles/merchant/${id}/edit/`, body, getConfig())

/*
  -profiles-merchant-edit-partial_update:
  Updates the merchant information.
  ---------- Fields -----------
  id: integer in url query params [*required]
  accesses: array in body
  username: string in body
  first_name: string in body
  email: string in body
  phone_number: string in body
  avatar: string in body
  is_admin: boolean in body
*/
const partialUpdateEditMerchantProfiles = (id, body) =>
  axios.patch(`${BASE_URL}/profiles/merchant/${id}/edit/`, body, getConfig())

/*
  -profiles-merchant-list-list:
  Shows a list of merchants in current panel.
  ---------- Fields -----------
  page: integer in url query params
*/
const getProfilesMerchant = () =>
  axios.get(`${BASE_URL}/profiles/merchant/list/`, getConfig())

/*
  -profiles-profile-edit-update:
  Updates the profile information.
  ---------- Fields -----------
  id: integer in url query params [*required]
  username: string in body [*required]
  first_name: string in body [*required]
  email: string in body
  phone_number: string in body [*required]
  avatar: string in body
  guest: boolean in body
*/
const updateEditProfileProfiles = (id, body) =>
  axios.put(`${BASE_URL}/profiles/profile/${id}/edit/`, body, getConfig())

/*
  -profiles-profile-edit-partial_update:
  Updates the profile information.
  ---------- Fields -----------
  id: integer in url query params [*required]
  username: string in body
  first_name: string in body
  email: string in body
  phone_number: string in body
  avatar: string in body
  guest: boolean in body
*/
const partialUpdateEditProfileProfiles = (id, body) =>
  axios.patch(`${BASE_URL}/profiles/profile/${id}/edit/`, body, getConfig())

/*
  -profiles-profile-me-list:
  Gives full profile information.
  ---------- Fields -----------
  page: integer in url query params
*/
const getProfilesProfile = () =>
  axios.get(`${BASE_URL}/profiles/profile/me/`, getConfig())

/*
  -shelves-brands-add-create:
  Use this endpoint to add an brand to your panel
  ---------- Fields -----------
  categories: array in body
  stores: array in body
  title: string in body [*required]
  description: string in body
  thumbnail: string in body
*/
const createAddBrandsShelves = body =>
  axios.post(`${BASE_URL}/shelves/brands/add/`, body, getConfig())

/*
  -shelves-brands-brand-read:
  Shows an brand's data
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getShelvesBrands = slug =>
  axios.get(`${BASE_URL}/shelves/brands/brand/${slug}/`, getConfig())

/*
  -shelves-brands-list-list:
  Use this endpoint to get the list of inventories in your panel
  ---------- Fields -----------
  page: integer in url query params
*/
const getShelvesBrands = () =>
  axios.get(`${BASE_URL}/shelves/brands/list/`, getConfig())

/*
  -shelves-categories-add-create:
  Use this endpoint to add an category to your panel
  ---------- Fields -----------
  brands: array in body
  parent_category: string in body
  filter_fields: array in body
  stores: array in body
  title: string in body [*required]
  slug: string in body
  description: string in body
  thumbnail: string in body
  cover: string in body
*/
const createAddCategoriesShelves = body =>
  axios.post(`${BASE_URL}/shelves/categories/add/`, body, getConfig())

/*
  -shelves-categories-category-read:
  Shows a category's data
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getShelvesCategories = slug =>
  axios.get(`${BASE_URL}/shelves/categories/category/${slug}/`, getConfig())

/*
  -shelves-categories-list-list:
  Show a list of all available categories
  ---------- Fields -----------
  page: integer in url query params
*/
const getShelvesCategories = () =>
  axios.get(`${BASE_URL}/shelves/categories/list/`, getConfig())

/*
  -shelves-category-products-list:
  Show the list of products in a category.
  ---------- Fields -----------
  category_slug: string in url query params [*required]
  page: integer in url query params
*/
const getShelvesCategory = category_slug =>
  axios.get(
    `${BASE_URL}/shelves/category/${category_slug}/products/`,
    getConfig()
  )

/*
  -shelves-category-products-create:
  Show the list of products in a category.
  ---------- Fields -----------
  category_slug: string in url query params [*required]
  title: string in body
  slug: string in body
  product_code: string in body
  short_description: string in body
  description: string in body
  thumbnail: string in body
  price: integer in body
  in_stock: boolean in body
  min_order_count: integer in body
  max_order_count: integer in body
  step_count: integer in body
  virtual_product: boolean in body
  delivery_await: integer in body
  delivery_await_tehran: integer in body
  pay_in_destination: boolean in body
*/
const createProductsCategoryShelves = (category_slug, body) =>
  axios.post(
    `${BASE_URL}/shelves/category/${category_slug}/products/`,
    body,
    getConfig()
  )

/*
  -shelves-favorites-add-create:
  No Description
  ---------- Fields -----------
  product_slug: string in body [*required]
*/
const createAddFavoritesShelves = body =>
  axios.post(`${BASE_URL}/shelves/favorites/add/`, body, getConfig())

/*
  -shelves-favorites-list-list:
  No Description
  ---------- Fields -----------
  page: integer in url query params
*/
const getShelvesFavorites = () =>
  axios.get(`${BASE_URL}/shelves/favorites/list/`, getConfig())

/*
  -shelves-favorites-remove-create:
  No Description
  ---------- Fields -----------
  product_slug: string in body [*required]
*/
const createRemoveFavoritesShelves = body =>
  axios.post(`${BASE_URL}/shelves/favorites/remove/`, body, getConfig())

/*
  -shelves-product-sub_products-create:
  Show the list of sub-products for a given product
  ---------- Fields -----------
  product_slug: string in url query params [*required]
*/
const createSubProductsProductShelves = (product_slug, body) =>
  axios.post(
    `${BASE_URL}/shelves/product/${product_slug}/sub_products/`,
    body,
    getConfig()
  )

/*
  -shelves-product-types-add-create:
  Use this endpoint to add a product type to your panel
  ---------- Fields -----------
  stores: array in body
  parent_product_type: string in body
  attributes: array in body
  title: string in body [*required]
  slug: string in body
  description: string in body
*/
const createAddTypesProduct = body =>
  axios.post(`${BASE_URL}/shelves/product-types/add/`, body, getConfig())

/*
  -shelves-product-types-list-list:
  Use this endpoint to get the list of product types in your panel
  ---------- Fields -----------
  page: integer in url query params
*/
const getShelvesProduct = () =>
  axios.get(`${BASE_URL}/shelves/product-types/list/`, getConfig())

/*
  -shelves-product-types-product-type-read:
  Shows a product type's data
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getShelvesProduct = slug =>
  axios.get(
    `${BASE_URL}/shelves/product-types/product-type/${slug}/`,
    getConfig()
  )

/*
  -shelves-store-products-list:
  Show the list of products in a store
  ---------- Fields -----------
  store_slug: string in url query params [*required]
  page: integer in url query params
*/
const getShelvesStore = store_slug =>
  axios.get(`${BASE_URL}/shelves/store/${store_slug}/products/`, getConfig())

/*
  -stores-mine-add-create:
  Use it as a merchant to create a store for your panel.
  ---------- Fields -----------
  categories: array in body [*required]
  title: string in body [*required]
  slug: string in body
  description: string in body
  logo: string in body
  cover: string in body
*/
const createAddMineStores = body =>
  axios.post(`${BASE_URL}/stores/mine/add/`, body, getConfig())

/*
  -stores-mine-list-list:
  Use it as a merchant to get a list of stores in your panel.
  ---------- Fields -----------
  page: integer in url query params
*/
const getStoresMine = () =>
  axios.get(`${BASE_URL}/stores/mine/list/`, getConfig())

/*
  -stores-mine-store-read:
  Use it as a merchant to get full data for a store in your panel.
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getStoresMine = slug =>
  axios.get(`${BASE_URL}/stores/mine/store/${slug}/`, getConfig())

/*
  -support-tickets-create-create:
  Use this endpoint to open a ticket regrading a product, and order, a store, or the system
  ---------- Fields -----------
  title: string in body [*required]
  text: string in body [*required]
  store: string in body
  product: string in body
  order: string in body
*/
const createCreateTicketsSupport = body =>
  axios.post(`${BASE_URL}/support/tickets/create/`, body, getConfig())

/*
  -support-tickets-list-list:
  Use this endpoint to open a ticket regrading a product, and order, a store, or the system
  ---------- Fields -----------
  page: integer in url query params
*/
const getSupportTickets = () =>
  axios.get(`${BASE_URL}/support/tickets/list/`, getConfig())

/*
  -support-tickets-ticket-read:
  Get full info on a ticket.
  ---------- Fields -----------
  ticket_code: string in url query params [*required]
*/
const getSupportTickets = ticket_code =>
  axios.get(`${BASE_URL}/support/tickets/ticket/${ticket_code}/`, getConfig())

/*
  -auth-password-reset-email-create:
  Use this endpoint to send email to user with password reset link.
  ---------- Fields -----------
  email: string in body [*required]
*/
const createEmailResetPassword = body =>
  axios.post(`${BASE_URL}/auth/password/reset/email/`, body, getConfig())

/*
  -auth-password-reset-mobile-create:
  Use this endpoint to send sms to user with password reset code.
  ---------- Fields -----------
  phone_number: string in body [*required]
*/
const createMobileResetPassword = body =>
  axios.post(`${BASE_URL}/auth/password/reset/mobile/`, body, getConfig())

/*
  -orders-panel-order-details-list:
  Takes an order code and shows order details for panel user.
  ---------- Fields -----------
  order_code: string in url query params [*required]
  page: integer in url query params
*/
const getOrdersPanel = order_code =>
  axios.get(
    `${BASE_URL}/orders/panel/order/${order_code}/details/`,
    getConfig()
  )

/*
  -payment-payment-pasargad-confirm-create:
  No Description
  ---------- Fields -----------
  tref: string in body [*required]
  fail: boolean in body
*/
const createConfirmPasargadPayment = body =>
  axios.post(`${BASE_URL}/payment/payment/pasargad/confirm/`, body, getConfig())

/*
  -payment-payment-pasargad-process-create:
  No Description
  ---------- Fields -----------
  transaction_code: string in body
*/
const createProcessPasargadPayment = body =>
  axios.post(`${BASE_URL}/payment/payment/pasargad/process/`, body, getConfig())

/*
  -payment-payment-pasargad-request-create:
  No Description
  ---------- Fields -----------
  amount: integer in body
  related_order: string in body
*/
const createRequestPasargadPayment = body =>
  axios.post(`${BASE_URL}/payment/payment/pasargad/request/`, body, getConfig())

/*
  -shelves-brands-brand-edit-update:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
  categories: array in body
  stores: array in body
  title: string in body [*required]
  description: string in body
  thumbnail: string in body
*/
const updateEditBrandBrands = (slug, body) =>
  axios.put(`${BASE_URL}/shelves/brands/brand/${slug}/edit/`, body, getConfig())

/*
  -shelves-brands-brand-edit-partial_update:
  Use this endpoint to update an brand's data
  ---------- Fields -----------
  slug: string in url query params [*required]
  categories: array in body
  stores: array in body
  title: string in body
  description: string in body
  thumbnail: string in body
*/
const partialUpdateEditBrandBrands = (slug, body) =>
  axios.patch(
    `${BASE_URL}/shelves/brands/brand/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -shelves-brands-brand-edit-delete:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getShelvesBrands = slug =>
  axios.delete(`${BASE_URL}/shelves/brands/brand/${slug}/edit/`, getConfig())

/*
  -shelves-categories-category-edit-update:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
  brands: array in body
  parent_category: string in body
  filter_fields: array in body
  stores: array in body
  title: string in body [*required]
  slug: string in body
  description: string in body
  thumbnail: string in body
  cover: string in body
*/
const updateEditCategoryCategories = (slug, body) =>
  axios.put(
    `${BASE_URL}/shelves/categories/category/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -shelves-categories-category-edit-partial_update:
  Use this endpoint to update a category's data
  ---------- Fields -----------
  slug: string in url query params [*required]
  brands: array in body
  parent_category: string in body
  filter_fields: array in body
  stores: array in body
  title: string in body
  slug: string in body
  description: string in body
  thumbnail: string in body
  cover: string in body
*/
const partialUpdateEditCategoryCategories = (slug, body) =>
  axios.patch(
    `${BASE_URL}/shelves/categories/category/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -shelves-categories-category-edit-delete:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getShelvesCategories = slug =>
  axios.delete(
    `${BASE_URL}/shelves/categories/category/${slug}/edit/`,
    getConfig()
  )

/*
  -shelves-categories-featured-list-list:
  Show a list of featured categories
  ---------- Fields -----------
  page: integer in url query params
*/
const getShelvesCategories = () =>
  axios.get(`${BASE_URL}/shelves/categories/featured/list/`, getConfig())

/*
  -shelves-categories-mine-list-list:
  Use this endpoint to get the list of categories in your panel
  ---------- Fields -----------
  page: integer in url query params
*/
const getShelvesCategories = () =>
  axios.get(`${BASE_URL}/shelves/categories/mine/list/`, getConfig())

/*
  -shelves-panel-product-images-add-create:
  Use this endpoint to add a image to your product
  ---------- Fields -----------
  product: string in body [*required]
  order: integer in body
  image: string in body [*required]
  slug: string in body
*/
const createAddImagesProduct = body =>
  axios.post(`${BASE_URL}/shelves/panel/product-images/add/`, body, getConfig())

/*
  -shelves-panel-product-inventories-add-create:
  Use this endpoint to add inventory data to your product
  ---------- Fields -----------
  inventory: string in body [*required]
  product: string in body [*required]
  stock_count: integer in body
  slug: string in body
*/
const createAddInventoriesProduct = body =>
  axios.post(
    `${BASE_URL}/shelves/panel/product-inventories/add/`,
    body,
    getConfig()
  )

/*
  -shelves-panel-products-add-create:
  Use this endpoint to add a product to your panel
  ---------- Fields -----------
  parent_product: string in body
  product_type: string in body
  brand: string in body
  categories: array in body
  stores: array in body
  payment_methods: array in body
  attributes: array in body
  settings: array in body
  title: string in body [*required]
  product_code: string in body
  short_description: string in body
  description: string in body
  thumbnail: string in body
  price: integer in body
  in_stock: boolean in body
  min_order_count: integer in body
  max_order_count: integer in body
  step_count: integer in body
  virtual_product: boolean in body
  delivery_await: integer in body
  delivery_await_tehran: integer in body
  pay_in_destination: boolean in body
*/
const createAddProductsPanel = body =>
  axios.post(`${BASE_URL}/shelves/panel/products/add/`, body, getConfig())

/*
  -shelves-panel-products-list-list:
  Use this endpoint to get the list of products in your panel
  ---------- Fields -----------
  page: integer in url query params
*/
const getShelvesPanel = () =>
  axios.get(`${BASE_URL}/shelves/panel/products/list/`, getConfig())

/*
  -shelves-panel-products-product-read:
  Shows a product's data
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getShelvesPanel = slug =>
  axios.get(`${BASE_URL}/shelves/panel/products/product/${slug}/`, getConfig())

/*
  -shelves-product-types-product-type-edit-update:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
  stores: array in body
  parent_product_type: string in body
  attributes: array in body
  title: string in body [*required]
  slug: string in body
  description: string in body
*/
const updateEditTypeProduct = (slug, body) =>
  axios.put(
    `${BASE_URL}/shelves/product-types/product-type/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -shelves-product-types-product-type-edit-partial_update:
  Use this endpoint to update a product type's data
  ---------- Fields -----------
  slug: string in url query params [*required]
  stores: array in body
  parent_product_type: string in body
  attributes: array in body
  title: string in body
  slug: string in body
  description: string in body
*/
const partialUpdateEditTypeProduct = (slug, body) =>
  axios.patch(
    `${BASE_URL}/shelves/product-types/product-type/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -stores-mine-store-edit-update:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
  categories: array in body [*required]
  title: string in body [*required]
  slug: string in body
  description: string in body
  logo: string in body
  cover: string in body
*/
const updateEditStoreMine = (slug, body) =>
  axios.put(`${BASE_URL}/stores/mine/store/${slug}/edit/`, body, getConfig())

/*
  -stores-mine-store-edit-partial_update:
  Use it as a merchant to update a store in your panel.
  ---------- Fields -----------
  slug: string in url query params [*required]
  categories: array in body
  title: string in body
  slug: string in body
  description: string in body
  logo: string in body
  cover: string in body
*/
const partialUpdateEditStoreMine = (slug, body) =>
  axios.patch(`${BASE_URL}/stores/mine/store/${slug}/edit/`, body, getConfig())

/*
  -support-tickets-ticket-reply-create:
  Use this endpoint to send a reply to a ticket.
  ---------- Fields -----------
  ticket_code: string in url query params [*required]
  text: string in body [*required]
*/
const createReplyTicketTickets = (ticket_code, body) =>
  axios.post(
    `${BASE_URL}/support/tickets/ticket/${ticket_code}/reply/`,
    body,
    getConfig()
  )

/*
  -auth-password-reset-email-confirm-create:
  Use this endpoint to finish sms reset password process.
  ---------- Fields -----------
  code: string in body [*required]
  token: string in body [*required]
  email: string in body [*required]
  new_password: string in body [*required]
*/
const createConfirmEmailReset = body =>
  axios.post(
    `${BASE_URL}/auth/password/reset/email/confirm/`,
    body,
    getConfig()
  )

/*
  -auth-password-reset-mobile-confirm-create:
  Use this endpoint to finish sms reset password process.
  ---------- Fields -----------
  code: string in body [*required]
  token: string in body [*required]
  phone_number: string in body [*required]
  new_password: string in body [*required]
*/
const createConfirmMobileReset = body =>
  axios.post(
    `${BASE_URL}/auth/password/reset/mobile/confirm/`,
    body,
    getConfig()
  )

/*
  -shelves-panel-product-images-product-image-edit-update:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
  order: integer in body
  image: string in body [*required]
  slug: string in body
*/
const updateEditImageProduct = (slug, body) =>
  axios.put(
    `${BASE_URL}/shelves/panel/product-images/product-image/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -shelves-panel-product-images-product-image-edit-partial_update:
  Use this endpoint to update a product image
  ---------- Fields -----------
  slug: string in url query params [*required]
  order: integer in body
  image: string in body
  slug: string in body
*/
const partialUpdateEditImageProduct = (slug, body) =>
  axios.patch(
    `${BASE_URL}/shelves/panel/product-images/product-image/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -shelves-panel-product-images-product-image-edit-delete:
  Remove product image data
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getShelvesPanel = slug =>
  axios.delete(
    `${BASE_URL}/shelves/panel/product-images/product-image/${slug}/edit/`,
    getConfig()
  )

/*
  -shelves-panel-product-inventories-product-inventory-edit-update:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
  stock_count: integer in body
  slug: string in body
*/
const updateEditInventoryProduct = (slug, body) =>
  axios.put(
    `${BASE_URL}/shelves/panel/product-inventories/product-inventory/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -shelves-panel-product-inventories-product-inventory-edit-partial_update:
  Use this endpoint to update a product inventory
  ---------- Fields -----------
  slug: string in url query params [*required]
  stock_count: integer in body
  slug: string in body
*/
const partialUpdateEditInventoryProduct = (slug, body) =>
  axios.patch(
    `${BASE_URL}/shelves/panel/product-inventories/product-inventory/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -shelves-panel-product-inventories-product-inventory-edit-delete:
  Remove product inventory data
  ---------- Fields -----------
  slug: string in url query params [*required]
*/
const getShelvesPanel = slug =>
  axios.delete(
    `${BASE_URL}/shelves/panel/product-inventories/product-inventory/${slug}/edit/`,
    getConfig()
  )

/*
  -shelves-panel-products-product-edit-update:
  No Description
  ---------- Fields -----------
  slug: string in url query params [*required]
  parent_product: string in body
  product_type: string in body
  brand: string in body
  categories: array in body
  stores: array in body
  payment_methods: array in body
  attributes: array in body
  settings: array in body
  title: string in body [*required]
  product_code: string in body
  short_description: string in body
  description: string in body
  thumbnail: string in body
  price: integer in body
  in_stock: boolean in body
  min_order_count: integer in body
  max_order_count: integer in body
  step_count: integer in body
  virtual_product: boolean in body
  delivery_await: integer in body
  delivery_await_tehran: integer in body
  pay_in_destination: boolean in body
*/
const updateEditProductProducts = (slug, body) =>
  axios.put(
    `${BASE_URL}/shelves/panel/products/product/${slug}/edit/`,
    body,
    getConfig()
  )

/*
  -shelves-panel-products-product-edit-partial_update:
  Use this endpoint to update a product's data
  ---------- Fields -----------
  slug: string in url query params [*required]
  parent_product: string in body
  product_type: string in body
  brand: string in body
  categories: array in body
  stores: array in body
  payment_methods: array in body
  attributes: array in body
  settings: array in body
  title: string in body
  product_code: string in body
  short_description: string in body
  description: string in body
  thumbnail: string in body
  price: integer in body
  in_stock: boolean in body
  min_order_count: integer in body
  max_order_count: integer in body
  step_count: integer in body
  virtual_product: boolean in body
  delivery_await: integer in body
  delivery_await_tehran: integer in body
  pay_in_destination: boolean in body
*/
const partialUpdateEditProductProducts = (slug, body) =>
  axios.patch(
    `${BASE_URL}/shelves/panel/products/product/${slug}/edit/`,
    body,
    getConfig()
  )

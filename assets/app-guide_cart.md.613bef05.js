import{_ as e,o as t,c as a,V as s}from"./chunks/framework.c495fe11.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"app-guide/cart.md","filePath":"app-guide/cart.md"}'),i={name:"app-guide/cart.md"},o=s('<h2 id="general-shop-management" tabindex="-1">General shop management <a class="header-anchor" href="#general-shop-management" aria-label="Permalink to &quot;General shop management&quot;">​</a></h2><p>Discussion of sales-related functions:</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/2e130fd5-d336-4c9b-a0e2-c7bb5f1dc220" alt="image"></p><p><strong>Orders</strong> After filtering by calendar (date range from and to), product name, or platform user, you can review the order history here, including their status and details such as the amount, exact date of the transaction, etc.</p><p><strong>Payments</strong> By filtering through the calendar (date range from and to), status, or the option of who the invoice should be created for, similar to the Orders tab, you can view the details of payments processed in the admin panel when a customer makes a purchase of courses, webinars, consultations, etc.</p><p><strong>Vouchers</strong> These are discounts that can be applied to individual courses or product bundles. More information on this topic is available in a separate section dedicated solely to Vouchers.</p><p><strong>Products</strong> This is the general category of ALL items eligible for purchase. This means that a created product is something that can be bought (or redeemed for free if it has a price of 0 PLN) and transactions can be carried out through the shopping cart and payments. When adding a course, webinar, or consultation, the administrator has the ability to declare the existence of the aforementioned items as things available for customers to acquire through the Product tab.</p><h2 id="orders" tabindex="-1">Orders <a class="header-anchor" href="#orders" aria-label="Permalink to &quot;Orders&quot;">​</a></h2><p>The Orders tab is located in the expanded Sales list in the menu on the left side. In this section, you can review the list of orders made on the platform. The view after clicking on Orders looks as follows:</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/ff15bef9-9a99-4f57-8913-1ce4ec04eaf7" alt="image"></p><p>Displaying the list of Orders based on criteria:</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/e5d0fd78-7cea-41d5-bb59-38099b49d740" alt="image"></p><p>In the Orders tab, there are four options available for filtering the list when you expand the &quot;Expand&quot; section. The options include Date Range, User, Product, and Status.</p><p>The Date Range option allows you to view the order history within a specific time range (e.g., the last three weeks).</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/b51431c7-6be3-4237-ad13-7481f1cf3503" alt="image"></p><p>The User option displays the order history of a specific platform user.</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/95896060-a026-4fc8-9073-6299bba27b49" alt="image"></p><p>The Product option shows the order history of a specific purchased product.</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/e98d8ba0-70ef-49ec-ac40-27d4fb9b514c" alt="image"></p><p>The Status filter allows you to search for orders based on their status.</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/dc7965f2-db74-4e3a-ac9b-b7930973ac33" alt="image"></p><p>The white Reset button clears the filter fields and shows all groups. The blue Query button initiates the search based on the specified filter parameters. <img src="https://github.com/EscolaLMS/Cart/assets/108077902/28a824fb-da9d-4525-8d19-0343d029453b" alt="image"></p><p>In the Orders view, the following categories are displayed:</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/2988f7ca-b051-4f88-b62f-cc6d351bb635" alt="image"></p><ul><li>ID: The order number</li><li>Created: The date when the order was created</li><li>Subtotal: The net amount paid for the product</li><li>Tax: The VAT tax rate (already provided in PLN, not as a percentage)</li><li>Total: The gross amount paid for the product</li><li>Items: Displays a clickable button with the Product ID: X, indicating the purchased product</li></ul><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/67df8ee8-9909-4510-a986-acd9d6524a70" alt="image"></p><ul><li>User: Similar to the above, it displays a button with the User ID who made the purchase</li></ul><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/34bdade3-45af-4e6e-b770-9358a05c835f" alt="image"></p><ul><li>Status: It can have values of <strong>PAID</strong> and <strong>CANCELLED</strong></li></ul><h2 id="payments" tabindex="-1">Payments <a class="header-anchor" href="#payments" aria-label="Permalink to &quot;Payments&quot;">​</a></h2><p>The next tab after Orders is Payments. In this section, you can review the list of payments made within the platform system.</p><p>The view after clicking on Payments is as follows:</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/db4c514c-f616-478d-9ae5-5ee0c7e1a78a" alt="image"></p><p>The window is quite similar to the Users and Orders windows.</p><p>The Date Range - as mentioned above, allows setting a time range, specifically for payments.</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/94312620-dcc9-45fc-97c9-5adcd3ac4949" alt="image"></p><p>Status - we distinguish five statuses: new, paid, canceled, failed, redirect.</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/7a9800ed-a3b2-4a43-b45e-ecb09a8efb80" alt="image"></p><p>Additionally, it is possible to sort the results in ascending or descending order using small arrows next to the Payment categories. The categories in Payments are:</p><ul><li>ID - assigned payment number</li><li>Created - date of registering the payment in the admin panel</li><li>Updated - any updates made to this payment on a specific date</li><li>Amount - the nominal amount of the payment</li><li>Currency - the currency name (e.g., PLN, USD)</li><li>Status - can take the values &quot;paid&quot; or &quot;redirect&quot;</li><li>Paid For - indicates the path to which product the payment belongs. Clickable button with the ID of the product for which the payment was made.</li></ul><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/168190ac-0e09-4b2a-ad70-3a430f173269" alt="image"></p><h2 id="products" tabindex="-1">Products <a class="header-anchor" href="#products" aria-label="Permalink to &quot;Products&quot;">​</a></h2><p>Displaying a list of Products based on criteria</p><p>After logging into the Admin Panel, navigate to the Products tab in the left sidebar menu.</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/21cc00c0-428c-4ad0-b23b-23ea26f015d9" alt="image"></p><p>Above the area for the list of potential products, there are three display options: Name, Item, Type. There are two additional filters - For Sale and Free. To show them, simply click on the blue &quot;Show more&quot; link.</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/6265d1f9-e6f0-47c1-a6b3-ade50ca8b3a8" alt="image"></p><p>Name - this filter works similarly, searching for products containing the entered phrase. Item - it searches for a specific product from the list based on which PACKAGE it belongs to. We will discuss what a package is in a moment. Type - it allows filtering either individual products or packages that contain products. For Sale - it takes values True and False. If a product is added and marked as For Sale in its properties, it should appear on the list when filtering by True. Free - it also takes values True and False. If no price is specified, the product is considered free and will be displayed when filtered by True.</p><p>A single product record is presented as follows:</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/b5a9eb2b-4fb4-4b0b-a18c-90b35b3ced29" alt="image"></p><ul><li>ID, Name - function in the same way as discussed earlier, representing the sequential number of the item and its name.</li><li>Price - the current price of the product.</li><li>Old Price (strikethrough) - an option mentioned during the creation of a Course. It is used to present the product as a promotion after a price reduction.</li><li>Tax Rate - indicates the percentage of VAT included in the product. VAT can be changed to any legally required value.</li><li>Type - takes the value of Single or Package.</li><li>For Sale - discussed above in relation to filters - shows whether the product is available for purchase by customers.</li><li>Items - IDs assigned to a particular product, such as Webinar ID, Course ID, etc.</li><li>Options - editing and deleting products.</li></ul><h2 id="creating-a-new-product" tabindex="-1">Creating a new product <a class="header-anchor" href="#creating-a-new-product" aria-label="Permalink to &quot;Creating a new product&quot;">​</a></h2><p>To add a new product, click on the blue &quot;+ New&quot; button <img src="https://github.com/EscolaLMS/Cart/assets/108077902/5b297c54-0010-46df-b993-e77c66ddd1d1" alt="image">. However, the Admin Panel is designed in such a way that it is much more convenient to add a new Course, Webinar, Consultation, etc. and then the option to add it as a product will appear after confirming such an educational element (it&#39;s called a widget - a kind of shortcut in the program).</p><p>The process of adding a new product follows a similar structure as described earlier for Courses:</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/f2488486-01ce-4a8d-8c7e-a92cf3176b18" alt="image"></p><p>If we add a product from this place instead of using the widget when directly adding a Course, Consultation, etc., there is a new option called &quot;Object assigned to the product.&quot; From the list, we can select the educational element that will become a purchasable product.</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/2e23df45-c0ce-4683-81be-f0e414b056a5" alt="image"></p><p>After adding multiple individual products to a product bundle, you will see a list of items at the bottom that provides their ID, Name, Type, and the optional quantity that can be set for each item in the bundle.</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/a59da947-3952-4448-abdf-6546ab664d15" alt="image"></p><p>The rest of the options are filled out similarly to what was described for the predefined Course. After confirmation, additional tabs will appear, including &quot;Media for the Cart,&quot; &quot;Product Categories and Tags,&quot; &quot;User Enrollment,&quot; &quot;Save User Without an Account,&quot; and &quot;Templates.&quot; These options are already familiar to us as they were discussed in the context of Courses.</p><p><img src="https://github.com/EscolaLMS/Cart/assets/108077902/c65c190c-400c-4c5c-bece-a3503b638af8" alt="image"></p><p>When you want to edit an existing product, you can click on the blue edit button <img src="https://github.com/EscolaLMS/Cart/assets/108077902/3e541d86-9397-46ef-ba39-08131f9f5ac2" alt="image">. The form for editing the product is filled out in the same way as setting the price for an individual item. You can update the product details, such as its name, type, price, tax rate, and other relevant information. The editing process for a product follows the same format as when creating a new product, allowing you to make any necessary changes to the product&#39;s configuration.</p>',62),r=[o];function n(c,d,l,h,p,u){return t(),a("div",null,r)}const f=e(i,[["render",n]]);export{g as __pageData,f as default};

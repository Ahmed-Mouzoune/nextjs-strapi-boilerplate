## 📄 Adding a Page to Your Website

Before you start, ensure you have generated a Strapi API token with both **write** and **read** access, and that you've added it to your `.env.local` file.

### Step 1: Access the Strapi Dashboard 🔑

1. Go to the **Content Manager** in your Strapi Dashboard. You will need admin permissions to access this feature.

### Step 2: Select or Create a Collection Type 📚

1. Select **Page** in the Collection Types.
2. `optional` If you need to create a new collection type, you can do so in the **Content Type Builder**. but it shouldn't be necessary. [@todo Add link to Content Type Builder doc here]).

### Step 3: Create a New Entry ➕

1. Click the **Create New Entry** button.
2. Fill in the required fields as specified in the table below.

| Field Name               | Required? |
| ------------------------ | --------- |
| 📝 Title                 | ✅        |
| 🔗 Slug                  | ✅        |
| 🌐 SEO: Meta Title       | ✅        |
| 📝 SEO: Meta Description | ✅        |
| 🖼️ SEO: Meta Image       | ❌        |
| 📱 SEO: Meta Social      | ❌        |
| 🔑 SEO: Keywords         | ❌        |
| 🤖 SEO: Meta Robots      | ❌        |
| 📊 SEO: Structured Data  | ❌        |
| 📱 SEO: Meta Viewport    | ❌        |
| 🔗 Canonical URL         | ❌        |

### Step 4: Save Your Entry 💾

After filling in all the necessary fields, make sure to save your entry. You can now navigate to your Next.js application to render the newly created page.

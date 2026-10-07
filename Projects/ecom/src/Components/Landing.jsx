import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {" "}
      {/* Hero Section */}{" "}
      <section className="relative overflow-hidden bg-gray-900 px-6 py-20 text-white md:px-12 lg:py-28">
        {" "}
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {" "}
          <div>
            {" "}
            <span className="mb-5 inline-block rounded-full bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-300">
              {" "}
              ✨ New Collection 2026{" "}
            </span>{" "}
            <h1 className="max-w-2xl text-4xl font-extrabold leading-tight md:text-6xl">
              {" "}
              Find Products You'll{" "}
              <span className="text-blue-500"> Love.</span>{" "}
            </h1>{" "}
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              {" "}
              Discover quality products at great prices. Shop the latest trends
              and get everything you need, all in one place.{" "}
            </p>{" "}
            <div className="mt-8 flex flex-wrap gap-4">
              {" "}
              <Link
                to="/products"
                className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
              >
                {" "}
                Shop Now →{" "}
              </Link>{" "}
              <button className="rounded-xl border border-gray-600 px-7 py-3.5 font-semibold text-white transition hover:bg-gray-800">
                {" "}
                Explore Categories{" "}
              </button>{" "}
            </div>{" "}
            <div className="mt-10 flex gap-8">
              {" "}
              <div>
                {" "}
                <p className="text-2xl font-bold">10K+</p>{" "}
                <p className="text-sm text-gray-400">Products</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-2xl font-bold">50K+</p>{" "}
                <p className="text-sm text-gray-400">Customers</p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-2xl font-bold">4.8★</p>{" "}
                <p className="text-sm text-gray-400">Customer Rating</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Hero Image */}{" "}
          <div className="relative">
            {" "}
            <div className="absolute -inset-4 rounded-full bg-blue-600/20 blur-3xl"></div>{" "}
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
              alt="Shopping"
              className="relative h-[420px] w-full rounded-3xl object-cover shadow-2xl"
            />{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Categories */}{" "}
      <section className="px-6 py-16 md:px-12">
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          <div className="mb-10 flex items-end justify-between">
            {" "}
            <div>
              {" "}
              <p className="font-semibold text-blue-600">
                SHOP BY CATEGORY
              </p>{" "}
              <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                {" "}
                Explore Categories{" "}
              </h2>{" "}
            </div>{" "}
            <Link
              to="/products"
              className="hidden font-semibold text-blue-600 hover:text-blue-800 sm:block"
            >
              {" "}
              View All →{" "}
            </Link>{" "}
          </div>{" "}
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {" "}
            {[
              { name: "Electronics", icon: "💻", bg: "bg-blue-100" },
              { name: "Fashion", icon: "👕", bg: "bg-pink-100" },
              { name: "Beauty", icon: "💄", bg: "bg-purple-100" },
              { name: "Groceries", icon: "🛒", bg: "bg-green-100" },
            ].map((category) => (
              <div
                key={category.name}
                className={`${category.bg} cursor-pointer rounded-2xl p-8 text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg`}
              >
                {" "}
                <div className="text-5xl">{category.icon}</div>{" "}
                <h3 className="mt-4 font-bold">{category.name}</h3>{" "}
                <p className="mt-1 text-sm text-gray-600">
                  {" "}
                  Explore Products{" "}
                </p>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* Featured Section */}{" "}
      <section className="bg-white px-6 py-16 md:px-12">
        {" "}
        <div className="mx-auto max-w-7xl">
          {" "}
          <div className="mb-10">
            {" "}
            <p className="font-semibold text-blue-600">TRENDING NOW</p>{" "}
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              {" "}
              Featured Products{" "}
            </h2>{" "}
            <p className="mt-3 max-w-xl text-gray-500">
              {" "}
              Check out some of our most popular products picked specially for
              you.{" "}
            </p>{" "}
          </div>{" "}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {" "}
            {[
              {
                title: "Premium Headphones",
                price: "$129",
                image:
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80",
              },
              {
                title: "Smart Watch",
                price: "$199",
                image:
                  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80",
              },
              {
                title: "Running Shoes",
                price: "$89",
                image:
                  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80",
              },
            ].map((product) => (
              <div
                key={product.title}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {" "}
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-64 w-full object-cover"
                />{" "}
                <div className="p-5">
                  {" "}
                  <div className="flex items-center justify-between">
                    {" "}
                    <h3 className="text-lg font-bold">{product.title}</h3>{" "}
                    <span className="font-bold text-blue-600">
                      {" "}
                      {product.price}{" "}
                    </span>{" "}
                  </div>{" "}
                  <div className="mt-3 flex items-center justify-between">
                    {" "}
                    <span className="text-sm text-yellow-500">
                      {" "}
                      ⭐ 4.8{" "}
                    </span>{" "}
                    <Link
                      to="/products"
                      className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
                    >
                      {" "}
                      View Product{" "}
                    </Link>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* CTA */}{" "}
      <section className="px-6 py-16 md:px-12">
        {" "}
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-blue-600 px-8 py-14 text-center text-white md:px-16">
          {" "}
          <h2 className="text-3xl font-bold md:text-4xl">
            {" "}
            Ready to Start Shopping?{" "}
          </h2>{" "}
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            {" "}
            Browse thousands of products and find exactly what you're looking
            for.{" "}
          </p>{" "}
          <Link
            to="/products"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3.5 font-bold text-blue-600 transition hover:bg-gray-100"
          >
            {" "}
            Explore Products →{" "}
          </Link>{" "}
        </div>{" "}
      </section>{" "}
      {/* Footer */}{" "}
      <footer className="border-t bg-white px-6 py-8 text-center">
        {" "}
        <h2 className="text-xl font-bold">
          {" "}
          Shop<span className="text-blue-600">Ease</span>{" "}
        </h2>{" "}
        <p className="mt-2 text-sm text-gray-500">
          {" "}
          © 2026 ShopEase. All rights reserved.{" "}
        </p>{" "}
      </footer>{" "}
    </div>
  );
};
export default Landing;

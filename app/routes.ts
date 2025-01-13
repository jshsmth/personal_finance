import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("transactions", "./routes/transactions.tsx"),
    route("budgets", "./routes/budgets.tsx"),
    route("pots", "./routes/pots.tsx"),
    route("recurring-bills", "./routes/recurring-bills.tsx")
] satisfies RouteConfig;

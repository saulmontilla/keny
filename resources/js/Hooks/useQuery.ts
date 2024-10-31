import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";

export default function useQuery() {
    return usePage<PageProps>().props.ziggy.query
}
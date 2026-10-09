import { createFileRoute } from '@tanstack/react-router';
import { CreatePage } from '@/components/community/create';
import { pageHead } from '@/lib/community/meta';
export const Route=createFileRoute('/create')({head:()=>pageHead('Ask a Question','Start a thoughtful conversation and get a little help from the VesitConnect community.'),component:CreatePage});

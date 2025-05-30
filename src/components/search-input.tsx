import { useId } from 'react';
import { ArrowRight, Search } from 'lucide-react';

import { Input } from '@/components/ui/input';

export default function SearchInput() {
  const id = useId();
  return (
    <div className="relative w-full">
      <Input
        id={id}
        className="peer pe-9 ps-9"
        placeholder="Search..."
        type="search"
      />
      <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
        <Search size={16} strokeWidth={2} />
      </div>
      <button
        className="text-muted-foreground/80 hover:text-foreground focus-visible:outline-ring/70 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg outline-offset-2 transition-colors focus:z-10 focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Submit search"
        type="submit"
      >
        <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
      </button>
    </div>
  );
}

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/util'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 transition-colors overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-slate-900 text-white hover:bg-slate-800',
        secondary:
          'border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200',
        destructive:
          'border-transparent bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500',
        outline:
          'border-slate-200 text-slate-900 hover:bg-slate-100 hover:text-slate-900',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Badge = React.forwardRef<
  HTMLSpanElement,
  React.ComponentProps<'span'> &
    VariantProps<typeof badgeVariants> & { asChild?: boolean }
>(({ className, variant, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
})
Badge.displayName = 'Badge'

export { Badge, badgeVariants }
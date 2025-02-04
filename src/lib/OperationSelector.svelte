<script>
    import { DropdownMenu } from "bits-ui";
    import {
        Ellipsis,
        Plus,
        X,
        Divide,
        Minus
    } from "lucide-svelte";
    import { flyAndScale } from "./utils/transitions";

    let operatorUnlocks = {
        plus: true,
        minus: false,
        multiply: false,
        divide: false,
    }

    let operator1 = "+"
</script>

<DropdownMenu.Root>
    <DropdownMenu.Trigger
      class="focus-visible inline-flex h-10 w-10 items-center justify-center rounded-full border border-black bg-white text-sm font-medium text-foreground shadow-btn hover:bg-gray-200 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-98"
    >
        <Ellipsis class="h-6 w-6 text-black"/>
    </DropdownMenu.Trigger>
    <DropdownMenu.Content
      class="w-full max-w-[229px] rounded-xl border border-black bg-white px-1 py-1.5 shadow-lg"
      transition={flyAndScale}
      sideOffset={8}
    >
      <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-md py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-gray-200"
        onclick={() => {}}
      >
        <div class="flex items-center">
            <Plus class="mr-2 size-5 text-foreground-alt"/>
          Add
        </div>
        <div class="ml-auto flex items-center gap-px">
          <kbd
            class="inline-flex size-5 items-center justify-center rounded-md border border-dark-10 bg-background-alt text-xs text-muted-foreground shadow-sm"
          >
            +
          </kbd>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-md py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-gray-200"
        disabled={true}
      >
        <div class="flex items-center">
            <Minus class="mr-2 size-5 text-foreground-alt"/>
          Minus
        </div>
        <div class="ml-auto flex items-center gap-px">
          <kbd
            class="inline-flex size-5 items-center justify-center rounded-md border border-dark-10 bg-background-alt text-xs text-muted-foreground shadow-sm"
          >
            -
          </kbd>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-md py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-gray-200"
      >
        <div class="flex items-center">
            <X class="mr-2 size-5 text-foreground-alt"/>
          Multiply
        </div>
        <div class="ml-auto flex items-center gap-px">
          <kbd
            class="inline-flex size-5 items-center justify-center rounded-md border border-dark-10 bg-background-alt text-xs text-muted-foreground shadow-sm"
          >
            *
          </kbd>
        </div>
      </DropdownMenu.Item>
      <DropdownMenu.Item
        class="flex h-10 select-none items-center rounded-md py-3 pl-3 pr-1.5 text-sm font-medium !ring-0 !ring-transparent data-[highlighted]:bg-gray-200"
      >
        <div class="flex items-center">
            <Divide class="mr-2 size-5 text-foreground-alt"/>
          Divide
        </div>
        <div class="ml-auto flex items-center gap-px">
          <kbd
            class="inline-flex size-5 items-center justify-center rounded-md border border-dark-10 bg-background-alt text-xs text-muted-foreground shadow-sm"
          >
            /
          </kbd>
        </div>
      </DropdownMenu.Item>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
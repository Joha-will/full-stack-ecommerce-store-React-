"use client"

import { Label } from "@radix-ui/react-label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { formatCurrency } from "@/lib/formatters"
import { Button } from "@/components/ui/button"



export function ProductForm() {
    const [priceInCents, setPriceInCents] = useState<number>()
    return (
        <form className="space-y-8">

            <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" name="name" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="priceInCents">Price In Cents </Label>
                <Input type="number" id="priceInCents" name="priceInCents" required value={priceInCents} onChange={ e => setPriceInCents(Number(e.target.value) || undefined)} />
                <div className="text-muted-foreground"> {formatCurrency((priceInCents || 0) / 100)}</div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="description">description</Label>
                <Textarea id="description" name="description" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="file">File</Label>
                <Input type="file" id="file" name="file" required />
            </div>

            <div className="space-y-2">
                <Label htmlFor="image">Image</Label>
                <Input type="file" id="image" name="image" required />
            </div>

            <Button type="submit"> Save </Button>

        </form>
    )
}
"use client"

import {
  useForm,
  Controller
} from "react-hook-form"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { Label } from "@/components/ui/label"

import { Textarea } from "@/components/ui/textarea"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"

import { Checkbox } from "@/components/ui/checkbox"

import { Card } from "@/components/ui/card"

import { toast } from "sonner"


export default function TaskForm() {

  const {
    register,
    control,
    handleSubmit,
    reset,

    formState: {
      errors,
      isSubmitting
    }

  } = useForm({

    defaultValues: {

      title: "",

      description: "",

      priority: "medium",

      status: "pending",

      important: false

    }

  })


  async function onSubmit(data) {

    console.log(data)

    await new Promise(
      resolve => setTimeout(resolve, 1000)
    )

    toast.success(
      "Task created successfully"
    )

    reset()

  }


  return (

    <Card className="p-6">

      <form

        onSubmit={
          handleSubmit(onSubmit)
        }

        className="space-y-6"

      >

        {/* TITLE */}

        <div className="space-y-2">

          <Label>
            Task Title
          </Label>

          <Input

            placeholder="Enter task title"

            {...register("title", {

              required:
                "Task title is required",

              minLength: {

                value: 3,

                message:
                  "Minimum 3 characters"

              }

            })}

          />

          {errors.title && (

            <p className="text-sm text-destructive">

              {errors.title.message}

            </p>

          )}

        </div>


        {/* DESCRIPTION */}

        <div className="space-y-2">

          <Label>
            Description
          </Label>

          <Textarea

            placeholder="Describe your task..."

            className="min-h-[120px]"

            {...register("description", {

              required:
                "Description is required",

              minLength: {

                value: 10,

                message:
                  "Minimum 10 characters"

              }

            })}

          />

          {errors.description && (

            <p className="text-sm text-destructive">

              {errors.description.message}

            </p>

          )}

        </div>


        {/* PRIORITY */}

        <div className="space-y-2">

          <Label>
            Priority
          </Label>

          <Controller

            name="priority"

            control={control}

            render={({ field }) => (

              <Select

                value={field.value}

                onValueChange={
                  field.onChange
                }

              >

                <SelectTrigger>

                  <SelectValue />

                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="low">
                    Low
                  </SelectItem>

                  <SelectItem value="medium">
                    Medium
                  </SelectItem>

                  <SelectItem value="high">
                    High
                  </SelectItem>

                </SelectContent>

              </Select>

            )}

          />

        </div>


        {/* STATUS */}

        <div className="space-y-2">

          <Label>
            Status
          </Label>

          <Controller

            name="status"

            control={control}

            render={({ field }) => (

              <Select

                value={field.value}

                onValueChange={
                  field.onChange
                }

              >

                <SelectTrigger>

                  <SelectValue />

                </SelectTrigger>

                <SelectContent>

                  <SelectItem value="pending">
                    Pending
                  </SelectItem>

                  <SelectItem value="progress">
                    In Progress
                  </SelectItem>

                  <SelectItem value="completed">
                    Completed
                  </SelectItem>

                </SelectContent>

              </Select>

            )}

          />

        </div>


        {/* IMPORTANT */}

        <Controller

          name="important"

          control={control}

          render={({ field }) => (

            <div className="flex items-center gap-3">

              <Checkbox

                checked={field.value}

                onCheckedChange={
                  field.onChange
                }

              />

              <Label>
                Mark as important
              </Label>

            </div>

          )}

        />


        {/* SUBMIT */}

        <Button

          type="submit"

          disabled={isSubmitting}

          className="w-full"

        >

          {isSubmitting
            ? "Creating..."
            : "Create Task"}

        </Button>

      </form>

    </Card>

  )

}
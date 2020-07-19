export const stripUnit = (value: string): number => Number(value.replace(/[^\d]*$/, ""))

export const stack = (list: readonly string[], element: string) => {
  const index = list.indexOf(element)

  if (index === -1) {
    throw new Error(`There is no item "${element}" in the given list.`)
  }

  return (index + 1) * 10
}

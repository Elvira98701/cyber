import { Input } from "../ui";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface FiltersProps {
  className?: string;
}

export const Filters: React.FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <div className="border-b pb-7">
        <p className="font-bold mb-3 text-foreground">Price:</p>
        <div className="flex gap-3 mb-5">
          <Input
            className="bg-background"
            type="number"
            placeholder="0"
            min={0}
            max={240000}
          />
          <Input
            className="bg-background"
            type="number"
            min={100}
            max={250000}
            placeholder="250000"
          />
        </div>

        <RangeSlider min={0} max={250000} step={100} />
      </div>

      <CheckboxFiltersGroup
        className="mt-5"
        title="Brand:"
        limit={6}
        defaultItems={[
          {
            text: "Apple",
            value: "1",
          },
          {
            text: "Samsung",
            value: "2",
          },
          {
            text: "Xiaomi",
            value: "3",
          },
          {
            text: "Poco",
            value: "4",
          },
          {
            text: "OPPO",
            value: "5",
          },
          {
            text: "Honor",
            value: "6",
          },
          {
            text: "Motorola",
            value: "7",
          },
          {
            text: "Nokia",
            value: "8",
          },
          {
            text: "Realme",
            value: "9",
          },
          {
            text: "Tecno",
            value: "10",
          },
        ]}
        items={[
          {
            text: "Apple",
            value: "1",
          },
          {
            text: "Samsung",
            value: "2",
          },
          {
            text: "Xiaomi",
            value: "3",
          },
          {
            text: "Poco",
            value: "4",
          },
          {
            text: "OPPO",
            value: "5",
          },
          {
            text: "Honor",
            value: "6",
          },
          {
            text: "Motorola",
            value: "7",
          },
          {
            text: "Nokia",
            value: "8",
          },
          {
            text: "Realme",
            value: "9",
          },
          {
            text: "Tecno",
            value: "10",
          },
        ]}
      />
    </div>
  );
};

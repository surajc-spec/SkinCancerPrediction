import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import React, { Fragment } from "react";

const models = [
  { id: 1, name: "Custom CNN", value: "skin_models_custom_cnn" },
  { id: 2, name: "MobileNetV2", value: "skin_models_mobilenetv2" },
  { id: 3, name: "VGG19", value: "skin_models_vgg19" },
];

export default function ModelSelector({ selectedModel, setSelectedModel }) {
  const selected = models.find((m) => m.value === selectedModel);

  return (
    <div className="mb-6 w-full max-w-xs">
      <label className="block mb-2 text-lg font-heading text-textColor">
        Select Model:
      </label>

      <Listbox
        value={selected}
        onChange={(model) => setSelectedModel(model.value)}
      >
        <div className="relative">
          {/* Button */}
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg border border-Grey bg-secondary py-2 pl-4 pr-10 text-left shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition">
            <span className="block truncate text-textColor">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="h-5 w-5 text-primary" />
            </span>
          </Listbox.Button>

          {/* Options */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-lg bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {models.map((model) => (
                <Listbox.Option
                  key={model.id}
                  value={model}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                      active ? "bg-primary text-white" : "text-textColor"
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-semibold" : "font-normal"
                        }`}
                      >
                        {model.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <Check className="h-5 w-5" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

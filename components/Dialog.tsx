import { Modalprops } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useSearchParams } from "next/navigation";
import SignUpForm from "./SignUpForm";

const MyModal = ({ isModalOpen, onModalClose }: Modalprops) => {
  const searchParams = useSearchParams();
  const isModalOpenFromUrl = searchParams.get("signup");
  const isModalOpenFromUrlBoolean = isModalOpenFromUrl === "true";

  if (isModalOpenFromUrlBoolean) {
    isModalOpen = true;
  }

  const closeModal = () => {
    onModalClose();
  };

  //Here I am copying code from https://headlessui.dev/react/modal,
  //And adding "useSearchParams" an other required changes.

  return (
    <>
      <Transition appear show={isModalOpenFromUrlBoolean} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Sign Up
                  </Dialog.Title>
                  <SignUpForm />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MyModal;

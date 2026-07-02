/**
 * How do we annotate the errors this function throws?
 */

type PossibleErrors = SyntaxError | DOMException;

// const getUserFromLocalStorage = (id: string) => {
//   const user = localStorage.getItem(id);
//   if (!user) {
//     return undefined;
//   }
//
//   return JSON.parse(user);
// };
//
// try {
//   const user = getUserFromLocalStorage("user-1");
// } catch (
//   // How do we make this typed as PossibleErrors?
//   e
// ) {}

type GetUserFromLocalStorageReturn =
  | { success: true; data: unknown }
  | { success: false; error: PossibleErrors };

function getUserFromLocalStorage(id: string): GetUserFromLocalStorageReturn {
  try {
    const user = localStorage.getItem(id);

    if (!user) {
      return {
        success: true,
        data: undefined,
      };
    }

    return {
      success: true,
      data: JSON.parse(user),
    };
  } catch (error) {
    if (error instanceof SyntaxError) {
      return {
        success: false,
        error,
      };
    }

    if (error instanceof DOMException) {
      return {
        success: false,
        error,
      };
    }

    throw error;
  }
}

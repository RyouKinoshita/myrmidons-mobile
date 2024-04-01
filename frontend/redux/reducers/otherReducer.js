import { createReducer } from "@reduxjs/toolkit";

export const otherReducer = createReducer({}, (builder) => {
  builder
    .addCase("updatePasswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateProfileRequest", (state) => {
      state.loading = true;
    })
    .addCase("updatePicRequest", (state) => {
      state.loading = true;
    })
    .addCase("placeOrderRequest", (state) => {
      state.loading = true;
    })
    .addCase("processOrderRequest", (state) => {
      state.loading = true;
    })
    .addCase("addCategoryRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteCategoryRequest", (state) => {
      state.loading = true;
    })
    .addCase("addServiceRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateServiceRequest", (state) => {
      state.loading = true;
    })
    .addCase("updateServiceImageRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteServiceImageRequest", (state) => {
      state.loading = true;
    })
    .addCase("deleteServiceRequest", (state) => {
      state.loading = true;
    })
    .addCase("forgetPasswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("resetPasswordRequest", (state) => {
      state.loading = true;
    })
    .addCase("updatePasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateProfileSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updatePicSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("placeOrderSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("processOrderSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("addCategorySuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteCategorySuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("addServiceSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateServiceSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updateServiceImageSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteServiceImageSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("deleteServiceSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("forgetPasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("resetPasswordSuccess", (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase("updatePasswordFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateProfileFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updatePicFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("placeOrderFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("processOrderFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("addCategoryFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteCategoryFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("addServiceFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateServiceFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("updateServiceImageFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteServiceImageFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("deleteServiceFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("forgetPasswordFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("resetPasswordFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

  builder.addCase("clearError", (state) => {
    state.error = null;
  });
  builder.addCase("clearMessage", (state) => {
    state.message = null;
  });
});

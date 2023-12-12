import { Props } from "next/script";

const LoginForm = (props: Props) => {
  //const { isXg, accentColor, isGlue, isFifo, label } = props

  //const [country, setCountry] = useState(defaultCountryDetails)
  // const [countryLoading, setCountryLoading] = useState(true)

  // const getLocation = async () => {
  //   const countryFromIp = await getUserCountryFromIp()
  //   countryFromIp && setCountry(countryFromIp)
  //   setCountryLoading(false)
  // }

  // useEffect(() => {
  //   getLocation()
  // }, [])

  // const [isPhoneModalOpen, setIsPhoneModalOpen] = useState(false)
  // const [showPassword, setShowPassword] = useState(false)

  // const router = useRouter()
  // const parsedURLQueryParams = useGetParsedURLQueryParams()

  //   const form = useForm<LoginFormValues>({
  //     initialValues: {
  //       phone: "",
  //       password: "",
  //     },
  //   validate: {
  //     phone: (value) => {
  //       if (typeof value !== 'string') return AUTH_VALIDATION_ERRORS.INVALID_PHONE_FORMAT
  //       else if (value.length < 1) {
  //         return AUTH_VALIDATION_ERRORS.PHONE_REQUIRED
  //       }
  //     },
  //     password: (value) => {
  //       if (value.length < 8) return AUTH_VALIDATION_ERRORS.PASSWORD_REQUIRED
  //       else if (value.length > 64) {
  //         return AUTH_VALIDATION_ERRORS.MAXIMUM_PASSWORD_LENGTH
  //       } else if (!/[a-z]/.test(value)) {
  //         return AUTH_VALIDATION_ERRORS.LOWERCASE_REQUIRED
  //       } else if (!/\d/.test(value)) {
  //         return AUTH_VALIDATION_ERRORS.NUMBER_REQUIRED
  //       } else if (!/[^a-zA-Z0-9]/.test(value)) {
  //         return AUTH_VALIDATION_ERRORS.SPECIAL_CHARACTER_REQUIRED
  //       }
  //     },
  //   },
  //     validateInputOnBlur: true,
  //   });
  //   const { errors, values } = form;

  // const isButtonDisabled =
  //   !isNilOrEmpty(errors.phone) ||
  //   !isNilOrEmpty(errors.password) ||
  //   isNilOrEmpty(values.password) ||
  //   isNilOrEmpty(values.phone)
  return (
    <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

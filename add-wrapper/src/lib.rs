pub mod wrap;
pub use wrap::*;

pub fn add(args: ArgsAdd) -> u32 {
    return args.a + args.b;
}
